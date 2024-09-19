const { option, task } = require("grunt");
const { watch } = require("less");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/style.css' : 'src/styles/style.less'  
                }
            },
            production: {
                options:{
                    compress: true,  
                },
                files: {
                    'dist/styles/style.min.css' : 'src/styles/style.less'  
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/script.min.js' : './src/scripts/script.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);
};