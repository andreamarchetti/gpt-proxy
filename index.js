const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  secure: false,
  changeOrigin: true,
});

const server = http.createServer((req, res) => {
  // Intercept requests to the chat page and proxy them to the OpenAI chat URL
  if (req.url.startsWith('/chat')) {
    const newUrl = `https://chat.openai.com/chat`;
    proxy.web(req, res, { target: newUrl, headers: { host: 'chat.openai.com' } });
  } else {
    // Return 404 for all other requests
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
