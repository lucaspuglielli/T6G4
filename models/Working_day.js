module.exports = (sequelize, DataTypes) => {
  const working_day = sequelize.define('working_day', {
    id_employee: DataTypes.INTEGER,
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
  working_day.associate = (models) => {
    working_day.belongsTo(models.employee, {foreignKey: 'id_employee'})
  }
  return working_day;
};