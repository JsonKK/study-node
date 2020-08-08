exports.keys = 'to do something';
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks',
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'http://10.10.98.225:3000/news',
};


exports.middleware = [
  'robot'
];


exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};