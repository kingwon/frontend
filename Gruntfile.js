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
                dest: 'JS/libs.js'
            }
        },
        //编译less
        less: {
            build: {
                //源文件
                src: 'CSS/base.less',
                //目标文件
                dest: 'CSS/base.css'
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
                src: ['bootstrap-dist/css/bootstrap.css', 'CSS/base.css'],
                //目标文件
                dest: 'CSS/libs.css'
            }
        },
        
        //监控文件变化，自动运行任务
        watch: {
            scripts: {
                files: ['CSS/*/*.less'],
                tasks: ['css']
            }
        }
    });
 
    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认执行的任务
    //编译，压缩css
    grunt.registerTask('css', ['less', 'cssmin']);
    grunt.registerTask('js', 'uglify');
    grunt.registerTask('default', ['css', 'js']);
};