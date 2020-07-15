### node项目学习
- node-web(webserve的搭建)
- node-code-guide(nodejs开发指南)


#### url-match项目(需要注意和考虑的点)
- 不能关注请求的方式（GET、PUT、POST等）。要维持HTTP的语义就需要对GET、PUT或者POST请求进行不同的处理。
- 是否有给错误的URL请求提供404页面
- 没有为URL和表单屏蔽注入式的脚本攻击
- 不支持cookie处理，也没有使用cookie维持会话
- 没有记录请求
- 不支持身份验证
- 未处理图像、css、javascript或者HTML这样的静态文件
- 没有对页面尺寸、执行时间等施加限制