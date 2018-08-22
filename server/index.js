const next = require('next');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const server = require('express');

const pageRoutes = require('../routes');
const handler = pageRoutes.getRequestHandler(app);
const apiRoutes = require('./apiRoutes');

const PORT = 3000;

app.prepare().then(() => {
  server()
    .use('/api', apiRoutes)
    .use(handler)
    .listen(PORT, () => console.log(`Server started at port ${PORT}`));
});
