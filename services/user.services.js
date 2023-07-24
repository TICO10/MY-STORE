const { faker } = require('@faker-js/faker')

class UserServices {

  constructor(){
    this.user = [];
  }

  async create(){

  }

  async find(){
    return this.products;
  }

  async findOne(limit, offset){
    this.user.push({
      limit: limit,
      offset: offset
    });
    return this.user;
  }

  async update(){

  }

  async delete(){

  }
}

module.exports = UserServices;
