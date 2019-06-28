var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'Zijing Zhou route 3#'
});

var options = {
    host: '192.168.5.23',
    port: '3000',
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Length': contents.length
    }
};

var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.write(contents);
req.end();