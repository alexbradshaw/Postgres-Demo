const router = require('express').Router();
const dbRoutes = require('./dbRoutes');

router.use('/db', dbRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;