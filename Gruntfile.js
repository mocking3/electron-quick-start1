var grunt = require("grunt");
grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            appDirectory: './dist/sinocrane_guid-win32-x64',
            outputDirectory: './dist',
            loadingGif: './assets/img/loading.gif',
            authors: 'machine',
            description:"华鹤意居大屏展示引导页",
            version: "1.0.3",
            title: "华鹤意居引导页",
            // iconUrl: "./assets/img/logo.png",
            setupIcon:  "./assets/img/app-icon/win/app.ico"
        }
    }
});

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);