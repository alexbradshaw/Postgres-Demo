const express = require('express');
const postgres = require('./config/connection');

const app = express();
const PORT = 3001;


postgres.connect()
.then(
    app.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}`))
)
.catch(err => console.error(err))
