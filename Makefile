all: ameblo

ameblo: builds/downloader_ameblo_mayuri.js builds/downloader_ameblo_honoka.js builds/downloader_ameblo_mai.js builds/downloader_ameblo_sakurako.js builds/downloader_ameblo_yuria.js 

builds/downloader_ameblo_mayuri.js: downloader_ameblo.js
	mkdir -p builds
	sed 's/__AMEBLO_ACCOUNT/mayuri-okumura/g' $^ > $@

builds/downloader_ameblo_honoka.js: downloader_ameblo.js
	mkdir -p builds
	sed 's/__AMEBLO_ACCOUNT/honoka-kono/g' $^ > $@

builds/downloader_ameblo_mai.js: downloader_ameblo.js
	mkdir -p builds
	sed 's/__AMEBLO_ACCOUNT/mai-okamoto/g' $^ > $@

builds/downloader_ameblo_sakurako.js: downloader_ameblo.js
	mkdir -p builds
	sed 's/__AMEBLO_ACCOUNT/sakurako-tanio/g' $^ > $@

builds/downloader_ameblo_yuria.js: downloader_ameblo.js
	mkdir -p builds
	sed 's/__AMEBLO_ACCOUNT/yuria-kikuhara/g' $^ > $@

