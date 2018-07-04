const sass = require("node-sass");

module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: "node_modules/daemonite-material/js/",
            src: ["material.min.js"],
            dest: "docs/js/",
            filter: "isFile"
          },
          {
            expand: true,
            cwd: "src/js/",
            src: ["responsiveDrawer.js"],
            dest: "docs/js/",
            filter: "isFile"
          }
        ]
      }
    },
    pug: {
      release: {
        options: {
          data: {
            debug: true,
            pretty: false
          }
        },
        files: [
          {
            "docs/index.html": "src/html/index.pug"
          },
          {
            "docs/ui-decorator.html": "src/html/ui-decorator.pug"
          },
          {
            "docs/ja/index.html": "src/html/ja/index.pug"
          },
          {
            "docs/ja/ui-decorator.html": "src/html/ja/ui-decorator.pug"
          }
        ]
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          "docs/css/material-custom.min.css":
            "src/css/custom.scss"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-pug");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("_Dist", ["copy", "pug", "sass"]);
};