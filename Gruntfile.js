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
                    cwd: 'alfance.github.io/public/sass',
                    src: ['custom-style.scss'],
                    dest: 'alfance.github.io/public/css',
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
               'alfance.github.io/public/custom-js.js': ['alfance.github.io/public/js/**/*.js'],
             },
           },
         },

        /**
		 * minify css
		 */
         cssmin: {
           target: {
             files: {
              'alfance.github.io/dist/custom-style.css': ['alfance.github.io/public/css/custom-style.css']
             }
           }
       },
       /**
        * minify js
        */
        uglify: {
            my_target: {
              files: {
                'alfance.github.io/dist/custom-js.js': ['alfance.github.io/public/custom-js.js']
              }
            }
        },

        /**
	  	 * validate js files
	  	 */
        jshint: {
          // define the files to lint
          files: ['Gruntfile.js', 'alfance.github.io/public/js/**/*.js'],
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
           files: ['<%= jshint.files %>','alfance.github.io/public/sass/**/*.scss'],
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
