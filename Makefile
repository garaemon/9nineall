all: yaplog

yaplog: builds/downloader_yaplog_uki.js builds/downloader_yaplog_hirona.js builds/downloader_yaplog_kanae.js builds/downloader_yaplog_umika.js builds/downloader_yaplog_sayaka.js 

builds/downloader_yaplog_uki.js: downloader_yaplog.js
	mkdir -p builds
	sed 's/__YAPLOG_ACCOUNT/lp-satakeuki/g' $^ > $@

builds/downloader_yaplog_hirona.js: downloader_yaplog.js
	mkdir -p builds
	sed 's/__YAPLOG_ACCOUNT/lp-hiroro/g' $^ > $@

builds/downloader_yaplog_kanae.js: downloader_yaplog.js
	mkdir -p builds
	sed 's/__YAPLOG_ACCOUNT/lp-yoshii/g' $^ > $@

builds/downloader_yaplog_umika.js: downloader_yaplog.js
	mkdir -p builds
	sed 's/__YAPLOG_ACCOUNT/lp-k-umika/g' $^ > $@

builds/downloader_yaplog_sayaka.js: downloader_yaplog.js
	mkdir -p builds
	sed 's/__YAPLOG_ACCOUNT/lp-n-sayaka/g' $^ > $@

