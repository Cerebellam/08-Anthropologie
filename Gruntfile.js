module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch:{
            all: {
                files: ['*.html','partials/*.html'], //,'!dist/**/*.*'
                tasks: ['includereplace']
            }
        },
        includereplace: {
            anthro: {
                src: ['**/*.*','!node_modules/**/*.*','!dist/**/*.*','!*.json','!Gruntfile.js','!partials/**/*.*'],
                dest: 'dist'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-include-replace');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};