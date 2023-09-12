const Users = require('./Users');
const Resume = require('./Resume');

Users.hasMany(Resume,{
    foreignKey:'UsersID',
    as: 'resume',
    onDelete: 'CASCADE',
  });
  Resume.belongsTo(Users,{
    foreignKey:'UsersID',
  });

  module.exports = {
    Users,
    Resume,
}