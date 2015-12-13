module.exports = function (grunt) {

  grunt.initConfig({
    sass: {                              
      dist: {                            
        options: {                       
          style: 'expanded'
        },
        files: {                         
          'src/assets/css/client.css': 'src/assets/scss/main.scss',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

}