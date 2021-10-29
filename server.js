const express = require('express');




app = express();
const PORT = process.env.PORT || 3001




app.listen(PORT, () => console.log(`Listen to: http://localhost:${PORT}`))