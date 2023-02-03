const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("서버가 포트 3000에서 운영중입니다 🚀");
  });

// test
app.use('/hello', (req, res) => {
    res.send('Hello test');
  });  