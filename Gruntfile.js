module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            fonts: {
                files: [{
                        expand: true,
                        cwd: "node_modules/daemonite-material/css/",
                        src: ["material.min.css"],
                        dest: "docs/css/",
                        filter: "isFile"
                    },
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
    less: {
      pre_build: {
        options: {
          compress: false
        },
        files: {
          "docs/css/tools.css": "src/css/tools.less"
        }
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
                files: [{
                    "docs/index.html": "src/html/index.pug"
                }, {
                    "docs/ui-decorator.html": "src/html/ui-decorator.pug"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-pug");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("_Dist", ["copy", "pug", "less"]);
};