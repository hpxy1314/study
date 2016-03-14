module.exports=function(grunt){

	grunt.initConfig({

		pkg:grunt.file.readJSON("package.json"),

		defCfg:{
			destClsSrc: "./skin",
			srcClsSrc:  "./src",
		},



			sass:{
				dist:{

					files:[{

						expand:true,
						cwd:"./src/",
						src:["*.scss"],
						dest:"./skin/",
						ext:".css"

					}],

					options:{
						sourcemap:"auto",
						style:"compressed"
					}
				}
			},

			watch:{

				scripts:{

					files:"<%= defCfg.srcClsSrc %>/*.scss",
					tasks:["sass"]

				}
			}


		});

	    grunt.loadNpmTasks('grunt-contrib-sass');
	    grunt.loadNpmTasks('grunt-contrib-watch');
	  	

	    grunt.registerTask('default',['sass']);



}