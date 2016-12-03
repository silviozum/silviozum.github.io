module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "_css/main.css": "_less/main.less"
        }
      }
    },        
    concat: {
      css: {
        src: [
        '_css/*'
        ],
        dest: 'css/main.css'
      }
    },
    cssmin: {
      css: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['_css/*', '_less/*'],
        tasks: ['less', 'concat:css', 'cssmin:css']
      },
      html: {
        files: ['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'],
        tasks: ['jekyll'],
        options: {
          spawn: false,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './_site'
        }
      }
    },

  });
require('load-grunt-tasks')(grunt);
grunt.registerTask('default', ['less', 'concat:css', 'cssmin:css']);
grunt.registerTask('css', ['less', 'concat:css', 'cssmin:css']);
grunt.registerTask('server', ['connect', 'watch']);
};