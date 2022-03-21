const info = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${Info.name} and I'm a wilder from ${Info.school}`,
    e : "oO",
    T : "U "
}));
