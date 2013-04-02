# jquery.line.js

* uses [requirejs](http://requirejs.org/)([github](https://github.com/jrburke/requirejs)) / AMD `define()` ✓
* uses jQuery ✓

## Purpose

Makes a horizontal red line appear `x` pixels from the top of the browser window, helps visualize scrollTop pixel positions.

## Usage

```javascript
require(["jquery","jquery-line"], function($){
    $("body").line(40);
});
```