const express = require('express');
const router = require('./routes/main');

const app = express();
const port = process.env.PORT || '8080';
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
