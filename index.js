const httpProxy = require('http-proxy');

const target = 'https://chat.openai.com/chat';

httpProxy.createServer({
  changeOrigin: true, 
  target, 
  cookieDomainRewrite: {
    '*': 'localhost:8001'
  },
}).listen(8001);
