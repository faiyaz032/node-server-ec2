const express = require('express');

const app = express();

const PORT = process.env.PORT || 8001;

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Hello, You deployed your server to ec2 successfully',
  });
});

app.listen(PORT, () => console.log(`Server is alive on PORT:${PORT}`));
