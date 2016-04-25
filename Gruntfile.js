module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
            files: [{
                    expand: true,
                    cwd: 'www/public/sass',
                    src: ['custom-style.scss'],
                    dest: 'www/public/css',
                    ext: '.css'
                  }]
		  }
		},

        /**
		 * concate
		 */
        concat: {
           basic_and_extras: {
             files: {
               'www/public/custom-js.js': ['www/public/js/**/*.js'],
             },
           },
         },

        /**
		 * minify css
		 */
         cssmin: {
           target: {
             files: {
              'www/dist/custom-style.css': ['www/public/css/custom-style.css']
             }
           }
       },
       /**
        * minify js
        */
        uglify: {
            my_target: {
              files: {
                'www/dist/custom-js.js': ['www/public/custom-js.js']
              }
            }
        },

        /**
	  	 * validate js files
	  	 */
        jshint: {
          // define the files to lint
          files: ['Gruntfile.js', 'www/public/js/**/*.js'],
          // configure JSHint (documented at http://www.jshint.com/docs/)
          options: {
              // more options here if you want to override JSHint defaults
            globals: {
              jQuery: true,
              console: true,
              module: true
            }
            }
        },
	  	/**
	  	 * Watch
	  	 */
         watch: {
           files: ['<%= jshint.files %>','www/public/sass/**/*.scss'],
           tasks: ['jshint', 'sass','concat','cssmin','uglify']
         }

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass']);
};
