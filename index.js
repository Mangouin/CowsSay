const info = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${info.name} and I'm a wilder from ${info.school}`,
    e : "oO",
    T : "U "
}));
