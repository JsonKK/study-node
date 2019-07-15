// var pic = '';
var myBuffers = Buffer.from('==ii1j2i3h1i23h','base64');
// var myBuffers = Buffer.from(pic,'base64');
console.log(myBuffers);
require('fs').writeFile(__dirname+'/logo.jpg',myBuffers,function(err,data){
    console.log(err);
});