const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  setTimeout(next, 1000);
});

server.use(middlewares);
server.use(router);

server.listen(3333, () => {
  console.log('JSON Server is running on port 3333 with 1s delay');
});
