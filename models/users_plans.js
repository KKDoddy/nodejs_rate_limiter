const usersPlansDefinition = (sequelize, DataTypes) => {
  const usersPlans = sequelize.define(
    "Users_Plans",
    {
      maxRequestsPerMonth: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      requestsPerSecond: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users_Plans",
    }
  );

  usersPlans.associate = (models) => {
    usersPlans.belongsTo(models.Users, {
      foreignKey: "userId",
    });
  };

  return usersPlans;
};

export default usersPlansDefinition;
