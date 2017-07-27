let models = require('../../models').getModels();

let getUser = async (userId: number) => {
    try {
      let res = models.users.find({
        attributes: [ ['first_name', 'firstName'], ['last_name', 'lastName'] ],
        where: {
          id: userId
        }
      });
      return res;
    } catch(e) {
      e => console.log(e.stack)
    } 
}

module.exports = {
  getUser: getUser
};