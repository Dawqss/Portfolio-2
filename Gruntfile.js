module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: '**/*.sass',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/style2.css': 'sass/style2.sass'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '**/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};