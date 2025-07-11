const express = require('express');

const app = express();

let port=3000;

app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
//   OR
  console.log(`App is listening on ${port}`);
});
