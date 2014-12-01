'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    jshint: {
      all: ['server.js', 'routes/*.js', 'public/**/*.js'],
      options: {
        jshintrc: true,
        ignores: ['public/jquery-1.11.1.js']
      }
    },

    jscs: {
      src: ['server.js', 'routes/*.js', 'public/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/api/test.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    sass: {
      dist: {
        files: {
          'app/css/style.css': 'app/css/scss/style.scss'
        }
      }
    },

    browserify: {
      dev: {
        src: ['app/js/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/*test.js'],
        dest: 'test/test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    }
  });

  grunt.registerTask('build:test', ['browserify:test']);
  grunt.registerTask('build:dev', ['sass', 'clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha', 'build:test']);
  grunt.registerTask('default', ['test']);
}
