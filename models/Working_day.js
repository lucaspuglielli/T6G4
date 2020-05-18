module.exports = (sequelize, DataTypes) => {
  const Working_day = sequelize.define('Working_day', {
    monday: DataTypes.INTEGER,
    tuesday: DataTypes.INTEGER,
    wednesday: DataTypes.INTEGER,
    thursday: DataTypes.INTEGER,
    friday: DataTypes.INTEGER,
    saturday: DataTypes.INTEGER,
    sunday: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  Working_day.associate = (models) => {
    Working_day.belongsToMany(models.Employee, {through: 'Employee_working_day', foreignKey: 'id_working_day'})
  }
  return Working_day;
};