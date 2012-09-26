// downloader.js
var YAPLOG_ACCOUNT = "lp-n-sayaka";
//var YAPLOG_ACCOUNT = "lp-satakeuki";
var YAPLOG_PREFIX = "http://yaplog.jp/";

var files_num = 0;

function clearAllEntity() {
  $("body").html("<ol></ol>");
}

function getTopImageLinkIndex(cb) {
    $.ajax({
        type: "GET",
        url: YAPLOG_PREFIX + YAPLOG_ACCOUNT,
        success: function(html) {
            var top_link = $(html).find(".entry .txt a").attr("href");
            // like yaplog.jp/lp-hiroro/image/298/312
            var idx = parseInt(top_link.match(/\/([0-9]+)\/[0-9]+$/i)[1], 10);
            console.log(idx);
            cb(idx);
        },
        error: function(err) {
            alert("sorry, network does not work, please retry it");
        }
    });
};

function dispatchMouseEvents(opt) {
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent(opt.type, opt.canBubble||true, opt.cancelable||true, opt.view||window, 
                     opt.detail||0, opt.screenX||0, opt.screenY||0, opt.clientX||0, opt.clientY||0, 
                     opt.ctrlKey||false, opt.altKey||false, opt.shiftKey||false, opt.metaKey||false, 
                     opt.button||0, opt.relatedTarget||null);
  opt.target.dispatchEvent(evt);
  return evt;
}

function getImagePage(idx) {
    if (idx == 0) {
        alert("done, please wait downloading: " + files_num + " files!");
    }
    else {
        $.ajax({
            url: YAPLOG_PREFIX + YAPLOG_ACCOUNT + "/image/" + idx,
            success: function(html) {
                var $html = $(html);
                $html.find("#mainR clearfix li a img").each(function() {
                    var src = $(this).attr("src");
                    var large_src = src.slice(0, src.length - 4)
                        + "_large" + src.slice(-4);
                    console.log(large_src);
                    var link = large_src;
                    $("ol").append('<li><a href="' + link + '">' + link + "</a></li>");
                    Array.prototype.slice.call(document.querySelectorAll(
                        'a[href$="' + link + '"]')).some(function(e) {
                            dispatchMouseEvents({ type:'click', altKey:true, target:e, button:0 });
                        });
                    files_num = files_num + 1;
                });
                getImagePage(idx - 1);
            },
            error: function(err) {
                console.log(JSON.stringify(err));
                console.log("sorry, network is disconnected");
            }
        });
    }
};

function main() {
    clearAllEntity();
    getTopImageLinkIndex(function(idx) {
        getImagePage(idx);
    });
};



$(function() {
  main();
});
