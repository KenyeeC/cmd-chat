String.prototype.yellow = function(){ return `\x1B[33m${ this.toString() }\x1B[39m`}
String.prototype.blue = function(){ return `\x1B[34m${ this.toString() }\x1B[39m`}
String.prototype.green = function(){ return `\x1B[32m${ this.toString() }\x1B[39m`}
String.prototype.red = function(){ return `\x1B[31m${ this.toString() }\x1B[39m`}