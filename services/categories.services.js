const { faker } = require('@faker-js/faker')

class CategoriesServices {

  constructor(){
    this.category = [];
  }

  async create(){

  }

  async find(){
  }

  async findOne(categoryId, productId){
    this.category.push({
      categoryId: categoryId,
      productId: productId
    });
    return this.category;
  }

  async update(){

  }

  async delete(){

  }
}

module.exports = CategoriesServices;
