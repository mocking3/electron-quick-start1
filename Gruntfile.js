var grunt = require("grunt");
grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            appDirectory: './dist/sinocrane_guid-win32-x64',
            outputDirectory: './dist',
            loadingGif: './assets/img/loading.gif',
            authors: '华鹤集团',
            description:"华鹤意居大屏展示引导页",
            version: "1.0.0",
            title: "华鹤意居",
            // iconUrl: "./assets/img/logo.png",
            setupIcon:  "./assets/img/app-icon/win/app.ico"
        }
    }
});

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);