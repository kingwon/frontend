module.exports = function(grunt) {
 
    // 构建任务配置
    grunt.initConfig({
        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),
        //压缩
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //具体任务配置
            build: {
                //源文件
                src: 'bootstrap-dist/js/bootstrap.js',
                //目标文件
                dest: 'JS/lib.js'
            }
        },

        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //具体任务配置
            build: {
                //源文件
                src: 'bootstrap-dist/css/bootstrap.css',
                //目标文件
                dest: 'CSS/base.css'
            }
        }
    });
 
    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 默认执行的任务
    grunt.registerTask('default', ['uglify', 'cssmin']);
};