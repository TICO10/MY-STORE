const express = require('express');
const UserServices = require('./../services/user.services')

const router = express.Router();
const service = new UserServices();

router.get('/', async (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    const user = await service.findOne(limit, offset);
    res.json(user);
  } else {
    res.send('No hay parametros');
  }

});


module.exports = router;
