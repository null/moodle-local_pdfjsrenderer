define([], function () {
    window.requirejs.config({
        //enforceDefine: false,
        paths: {
            "html5pdf": M.cfg.wwwroot + '/local/pdfjsrenderer/vendorjs/html5pdf/html5pdf',
            "scrollview": M.cfg.wwwroot + '/local/pdfjsrenderer/vendorjs/scrollview/scrollview',
            "pdfjs-dist/build/pdf": M.cfg.wwwroot + '/local/pdfjsrenderer/vendorjs/pdfjs-min/pdf.min',
            "pdfjs-dist/build/pdf.worker": M.cfg.wwwroot + '/local/pdfjsrenderer/vendorjs/pdfjs-min/pdf.worker.min',
        },
        shim: {
            'html5pdf': {exports: 'html5pdf'},
            'scrollview': {exports: 'scrollview'},
            //'pdfjslib': {exports: 'pdfjsLib'},
        }
    });
});