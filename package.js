Package.describe({
    name: 'konecty:bootstrap-wysiwyg',
    summary: 'WYSISWYG based off summernote',
    version: '1.3.1',
    git: 'https://github.com/Konecty/meteor-bootstrap-wysiwyg.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'summernote/dist/summernote.js',
        'summernote/dist/summernote.css',
        'summernote/lang/summernote-pt-BR.js',
    ], 'client');
});
