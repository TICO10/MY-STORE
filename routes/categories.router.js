const express = require('express');
const CategoriesServices = require('./../services/categories.services')

const router = express.Router();
const service = new CategoriesServices();

router.get('/:categoryId/products/:productId', async (req, res) => {
  const { categoryId, productId } = req.params;
  const category = await service.findOne(categoryId, productId);
  res.json(category);
});

module.exports = router;
