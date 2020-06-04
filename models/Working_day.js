module.exports = (sequelize, DataTypes) => {
  const Working_day = sequelize.define('Working_day', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
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
  Working_day.associate = (models) => {
    Working_day.belongsTo(models.Employee, {foreignKey: 'id_employee'})
  }
  return Working_day;
};