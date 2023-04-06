const httpProxy = require('http-proxy');

const target = 'https://chat.openai.com/chat';

httpProxy.createServer({
  changeOrigin: true, 
  target,
  cookieDomainRewrite: {
    '*': 'localhost'
  },
  cookiePathRewrite: {
    '*': '/'
  },
}).listen(8001);
