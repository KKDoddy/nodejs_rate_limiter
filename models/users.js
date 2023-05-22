import { Model } from "sequelize";

const usersDefinition = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  users.associate = (models) => {
    users.hasOne(models.Users_Plans, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };

  return users;
};

export default usersDefinition;
