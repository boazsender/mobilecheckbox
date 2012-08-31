# Mobilecheckbox

A simple CSS on/off toggle switch checkbox. Uses `before` and `:checked` psuedo selectors and the `content` property to make just a plain old simple `<input type="checkbox">` look nice, provide greater affordance, and say "on" and "off". It looks like this:

![example](http://gyazo.com/72b015ddcf249b2b2479cf0ad879081a.png?1346303159)

_tested on android 3.1 and iOS5.1.1 mobile safari_

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/boazsender/mobilecheckbox/master/dist/mobilecheckbox.min.css
[max]: https://raw.github.com/boazsender/mobilecheckbox/master/dist/mobilecheckbox.css

In your web page:

```html
<!doctype>
<html>
<head>
  <link rel="stylesheet" href="mobilecheckbox.css">
</head>
<body>
  <input type="checkbox">
</body>
</html>
```

## Release History
* v0.1.0-pre - 08/28/2012 - mobilecheckbox.css is pre release awaiting more mobile browser testing.

## License
Copyright (c) 2012 Boaz Sender  
Licensed under the MIT, GPL licenses.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [grunt](https://github.com/cowboy/grunt) and [grunt-css](https://github.com/jzaefferer/grunt-css).

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.