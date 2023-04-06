const httpProxy = require('http-proxy');

const target = 'https://chat.openai.com/chat';

httpProxy.createServer({
  changeOrigin: true, 
  target,
  onProxyReq: relayRequestHeaders,
  onProxyRes: relayResponseHeaders,
}).listen(8001);

function relayRequestHeaders(proxyReq, req) {
  Object.keys(req.headers).forEach(function (key) {
    proxyReq.setHeader(key, req.headers[key]);
  });
}

function relayResponseHeaders(proxyRes, req, res) {
  Object.keys(proxyRes.headers).forEach(function (key) {
    res.append(key, proxyRes.headers[key]);
  });
}