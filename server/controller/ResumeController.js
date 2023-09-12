const{Resume} = require('../models/Associations');

const getResume = async (req, res) => {
    const userId = req.params.IdUser;
    try {
      const result = await Resume.findAll({ where: { UsersID: userId } });
      if (result != null) {
        return res.json(result);
      }
    } catch (err) {
      return res.send("Resume not found");
    }
  };

  const addResume = async (req, res) => {
    let resume = req.body;
    let result = await Resume.create(resume);
    return res.json(result);
  };


  const deleteUserResume = async (req, res) => {
    let id = req.params.UserId;
    const result = await Resume.findAll({ where: { UsersID: id } });
    if (result != null) {
      await Resume.destroy({ where: { UsersID: id } });
      return res.json(result);
    }
    return res.send("Resume not found");
  };


  module.exports = {
    getResume,
    addResume,
    deleteUserResume,
  };