const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/", { target: "http://localhost:5000" }));
  app.use(proxy("/get", { target: "http://localhost:5000" }));
  app.use(proxy("/postName", { target: "http://localhost:5000" }));
};
