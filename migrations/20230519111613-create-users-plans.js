const up = (queryInterface, Sequelize) => {
  return queryInterface.createTable("Users_Plans", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    maxRequestsPerMonth: {
      type: Sequelize.INTEGER,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    requestsPerSecond: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
};

const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable("Users_Plans");
};

export { up, down };
