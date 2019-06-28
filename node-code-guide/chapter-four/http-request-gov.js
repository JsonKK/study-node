var http = require('http');
var querystring = require('querystring');

//工作台会员管理会员等级列表接口调试
//调试失败，接口未接受到请求，被拦截关闭
//已知错误： java.io.EOFException: Unexpected EOF read on the socket
var contents = querystring.stringify({
    pageNum: 1,
    pageSize: 100,
    total: 0
});

var options = {
    host: '192.168.5.78',
    port: '8888',
    path: '/tongplatform/business/chamber/v1/memberLevel/pageList',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': 38,
        'Cookie': 'Hm_lvt_ba9c038b2a74d8874e5e2d407c5a1540=1560396478,1560409740,1561602447; APP_ID=f84710339d7d4c9ebc5621ea3b58a4fa; AREA_CODE=350000; Hm_lvt_853c34f0166a975e51939c28ef5f1994=1560246002,1560414955,1561711819; token_ge=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblRpbWUiOjE1NjE3MTE4MjA0ODQsInBob25lIjoiMTgxMTExMTEwMjEiLCJhcHBJZCI6ImY4NDcxMDMzOWQ3ZDRjOWViYzU2MjFlYTNiNThhNGZhIiwib3N0eXBlIjoiSDUiLCJ1c2VyVHlwZSI6MSwidXNlcklkIjoiMWRkNmRmMGJlMmVmNGVjY2I0ZDZjODFiZWUxNWI0ZDYiLCJkZXZpY2VJZCI6Ikg1IiwiYWNjb3VudFVzZXJJZCI6IjFkZDZkZjBiZTJlZjRlY2NiNGQ2YzgxYmVlMTViNGQ2IiwibG9naW5UZXJtaW5hbCI6M30.CxBxanhczzVXHPk7zGodOytHs7asBzkLCX74X74kIqpR13UaiifwbbzqmtYslUj-Wv_9ZE-2kSiR815JNexsvy64takacULh_Mwz3JXY6P7E-oHsLjUTW5dqxwhUKGHPH8Eg9jm7U4iU4h-AOuoswG05KWRT_aU09C1_PW6DNC2xQqgMy1D5xIhfe4puwn4NpcvyXjtmmsLgwhIOtH1Q7DFHPbGWjlMXAfXVbDK85IzZawlkDqSl9spKp9Mk09D_BfTZUVTVexR_1y5qwbEwuGnPBDyTcGHOUy-iMQH28x--WlMhokwvPWlECAEA0M0funE9RvrsFrxO7ZrKVRzp2w; token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblRpbWUiOjE1NjE3MTE4MjA0ODQsInBob25lIjoiMTgxMTExMTEwMjEiLCJhcHBJZCI6ImY4NDcxMDMzOWQ3ZDRjOWViYzU2MjFlYTNiNThhNGZhIiwib3N0eXBlIjoiSDUiLCJ1c2VyVHlwZSI6MSwidXNlcklkIjoiMWRkNmRmMGJlMmVmNGVjY2I0ZDZjODFiZWUxNWI0ZDYiLCJkZXZpY2VJZCI6Ikg1IiwiYWNjb3VudFVzZXJJZCI6IjFkZDZkZjBiZTJlZjRlY2NiNGQ2YzgxYmVlMTViNGQ2IiwibG9naW5UZXJtaW5hbCI6M30.CxBxanhczzVXHPk7zGodOytHs7asBzkLCX74X74kIqpR13UaiifwbbzqmtYslUj-Wv_9ZE-2kSiR815JNexsvy64takacULh_Mwz3JXY6P7E-oHsLjUTW5dqxwhUKGHPH8Eg9jm7U4iU4h-AOuoswG05KWRT_aU09C1_PW6DNC2xQqgMy1D5xIhfe4puwn4NpcvyXjtmmsLgwhIOtH1Q7DFHPbGWjlMXAfXVbDK85IzZawlkDqSl9spKp9Mk09D_BfTZUVTVexR_1y5qwbEwuGnPBDyTcGHOUy-iMQH28x--WlMhokwvPWlECAEA0M0funE9RvrsFrxO7ZrKVRzp2w; Hm_lpvt_853c34f0166a975e51939c28ef5f1994=1561711824',
        'base-params': "{ 'clientParams': { 'os': 'H5', 'network': '', 'deviceId': 'H5', 'appVersion': '' }, 'areaCode': '350000', 'appId': 'f84710339d7d4c9ebc5621ea3b58a4fa', 'loginTerminal': 3 }",
        'deviceId': 'H5',
        'token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblRpbWUiOjE1NjE3MTE4MjA0ODQsInBob25lIjoiMTgxMTExMTEwMjEiLCJhcHBJZCI6ImY4NDcxMDMzOWQ3ZDRjOWViYzU2MjFlYTNiNThhNGZhIiwib3N0eXBlIjoiSDUiLCJ1c2VyVHlwZSI6MSwidXNlcklkIjoiMWRkNmRmMGJlMmVmNGVjY2I0ZDZjODFiZWUxNWI0ZDYiLCJkZXZpY2VJZCI6Ikg1IiwiYWNjb3VudFVzZXJJZCI6IjFkZDZkZjBiZTJlZjRlY2NiNGQ2YzgxYmVlMTViNGQ2IiwibG9naW5UZXJtaW5hbCI6M30.CxBxanhczzVXHPk7zGodOytHs7asBzkLCX74X74kIqpR13UaiifwbbzqmtYslUj-Wv_9ZE-2kSiR815JNexsvy64takacULh_Mwz3JXY6P7E-oHsLjUTW5dqxwhUKGHPH8Eg9jm7U4iU4h-AOuoswG05KWRT_aU09C1_PW6DNC2xQqgMy1D5xIhfe4puwn4NpcvyXjtmmsLgwhIOtH1Q7DFHPbGWjlMXAfXVbDK85IzZawlkDqSl9spKp9Mk09D_BfTZUVTVexR_1y5qwbEwuGnPBDyTcGHOUy-iMQH28x--WlMhokwvPWlECAEA0M0funE9RvrsFrxO7ZrKVRzp2w'
    }
};

var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });

    req.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });
});

req.write(contents);
req.end();