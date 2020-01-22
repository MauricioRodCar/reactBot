const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());

require('./routes/dialogFlowRoutes')(app);

app.listen(PORT);
