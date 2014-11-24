Package.describe({
    name: 'konecty:bootstrap-wysiwyg',
    summary: 'konecty:bootstrap-wysiwyg',
    version: '1.1.0',
    git: 'https://github.com/Konecty/meteor-bootstrap-wysiwyg.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'bootstrap3-wysiwyg/src/bootstrap3-wysihtml5.js',
        'bootstrap3-wysiwyg/src/bootstrap3-wysihtml5.css',
    ], 'client');
});
