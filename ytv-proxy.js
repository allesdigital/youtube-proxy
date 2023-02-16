const matcher = (path) => path.match(/\/ytv~(?<node>[^/]+)(?<path>.*)/).groups;

module.exports = {
  target: "https://*.googlevideo.com",
  changeOrigin: true,
  router: (req) => "https://" + matcher(req.url).node + ".googlevideo.com",
  pathRewrite: (path, req) => matcher(path).path,
};
