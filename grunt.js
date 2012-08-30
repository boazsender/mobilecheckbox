module.exports = function(grunt) {
  
  // Load grunt-css
  grunt.loadNpmTasks('grunt-css');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.css>'],
        dest: 'dist/<%= pkg.name %>.css'
      }
    },
    cssmin: {
      dist: {
        src: ['dist/<%= pkg.name %>.css'],
        dest: 'dist/<%= pkg.name %>.min.css'
      }
    },
    csslint: {
      base_theme: {
        src: "src/*.css",
        rules: {
          "import": 2,
          "adjoining-classes": 2,
          "important": 2,
          "box-sizing": 2,
          "box-model": false,
          "known-properties": 2,
          "duplicate-background-images": 2,
          "compatible-vendor-prefixes": false,
          "display-property-grouping": 2,
          "overqualified-elements": 2,
          "fallback-colors": 2,
          "duplicate-properties": 2,
          "empty-rules": 2,
          "errors": 2,
          "rules-count": 2,
          "ids": 2,
          "font-sizes": 2,
          "font-faces": 2,
          "gradients": false,
          "floats": 2,
          "outline-none": false,
          "qualified-headings": 2,
          "regex-selectors": 2,
          "shorthand": 2,
          "text-indent": 2,
          "unique-headings": 2,
          "universal-selector": 2,
          "unqualified-attributes": 2,
          "vendor-prefix": 2,
          "zero-units": 2
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'csslint concat cssmin');
};
