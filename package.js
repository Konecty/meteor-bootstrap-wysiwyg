Package.describe({
    name: 'bootstrap-wysiwyg',
    summary: 'bootstrap-wysiwyg',
    version: '1.0.0',
    git: 'https://github.com/Konecty/meteor-bootstrap-wysiwyg.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'bootstrap-wysiwyg/external/jquery.hotkeys.js',
        'bootstrap-wysiwyg/bootstrap-wysiwyg.js'
    ], 'client');
});
