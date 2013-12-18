module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowerDir: 'public/vendor',

		clean: ['assets/tmp'],

		concat: {
			css: {
				src: ['assets/tmp/bootstrap.css', 'assets/tmp/font-awesome.css'],
				dest: 'assets/tmp/concat.css'
			},
			js: {
				src: ['assets/js/jquery.js', 'assets/js/bootstrap.js'],
				dest: 'assets/tmp/concat.js'
			}
		},

		copy: {
			bootstrap: {
				files: [
					{ expand: true, cwd: '<%= bowerDir %>/bootstrap/less', src: ['bootstrap.less'], dest: 'assets/tmp/bootstrap' },
					{ expand: true, cwd: '<%= bowerDir %>/bootstrap/dist/js', src: ['bootstrap.js'], dest: 'assets/js' }
				]
			},
			fontawesome: {
				files: [
					{ expand: true, cwd: '<%= bowerDir %>/font-awesome/less', src: ['font-awesome.less'], dest: 'assets/tmp/font-awesome' },
					{ expand: true, cwd: '<%= bowerDir %>/font-awesome/font', src: ['*'], dest: 'public/fonts' }
				]
			},
			jquery: {
				files: [
					{ expand: true, cwd: '<%= bowerDir %>/jquery', src: ['jquery.js'], dest: 'assets/js' }
				]
			}
		},

		cssmin: {
			css: {
				options: {
					keepSpecialComments: 0
				},
				files: {
					'public/style.min.css': ['assets/tmp/concat.css']

				}
			}
		},

		less: {
			bootstrap: {
				options: {
					ieCompat: true,
					yuicompress: true,
					paths: ['assets/less/bootstrap', 'assets/tmp/bootstrap', '<%= bowerDir %>/bootstrap/less']
				},
				files: {
					'assets/tmp/bootstrap.css': 'assets/less/bootstrap/main.less'
				}
			},
			fontawesome: {
				options: {
					ieCompat: true,
					yuicompress: true,
					paths: ['assets/less/font-awesome', 'assets/tmp/font-awesome', '<%= bowerDir %>/font-awesome/less']
				},
				files: {
					'assets/tmp/font-awesome.css': 'assets/less/font-awesome/main.less'
				}
			}
		},

		uglify: {
			options: {
				preserveComments: false
			},
			my_target: {
				files: {
					'public/script.min.js': ['assets/tmp/concat.js']
				}
			}
		},

		watch: {
			files: ['assets/less/**/*.less', 'app/views/**/*'],
			tasks: ['default']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['copy', 'less', 'concat', 'cssmin', 'uglify', 'clean']);

};