(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"messages-and-signals","version":"1.0.0","description":"about messages and signals in nature","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git@github.com:shecodes-content/messages-and-signals.git"},"brain":{"requires":["encoding"],"provides":["signal","message"],"track":"yellow","bundler":{"name":"bpm-bundle","version":"1.2.0"}},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/shecodes-content/messages-and-signals/issues"},"homepage":"https://github.com/shecodes-content/messages-and-signals"}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"messages-and-signals_messages-and-signals\" class=\"anchor\" href=\"#messages-and-signals_messages-and-signals\"><span class=\"header-link\"></span></a>Messages and Signals</h1><p>All living things communicate in some way: The flower signals the bee that it has some interesting resources to offer by means of vibrant coloured blooms and a nice fragrant. At home in the hive, the bee tells their friends where to find that altruistic flower by encoding its position into a dance performance! (And the flower, not being that altruistic after all, is pretty happy to have its DNA spread across the land, but that is a different story)</p>\n<p>Some codes are being used for inter-species communication (flower to bee), others, like the bee-dance, can only be decoded by members of the same species.</p>\n<p>One of them, humans, invented two new categories – codes for human-machine communication and codes for machine-machine communication. How and why this happened is a story of love, death and despair and we’ll get to it in a bit.</p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{}]},{},[1]);
