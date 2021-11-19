const express = require('express');

require('dotenv').config();

const root = require('./routers/root');
const { error } = require('./middlewares');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(root);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
