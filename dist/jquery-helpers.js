(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./scripts/same-size');

},{"./scripts/same-size":2}],2:[function(require,module,exports){
jQuery(function($){
    var maxHeight = {};
    $('[data-same-height]').each(function(i, e) {
        var $e = $(e);
        var key = $e.data('same-height');
        console.log(key);
        if (maxHeight[key] === undefined) {
            maxHeight[key] = 0;
        }
        if($e.height() > maxHeight[key]) {
           maxHeight[key] = $e.height(); 
           console.log(maxHeight);
        } else {
            console.log($e.height());
        }
    });
    $('[data-same-height]').each(function(i, e) {
        var $e = $(e);
        var key = $e.data('same-height');
        $e.height(maxHeight[key]); 
       console.log(maxHeight);
    });
});

},{}]},{},[1]);
