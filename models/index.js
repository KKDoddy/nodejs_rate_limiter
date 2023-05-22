import Sequelize from "sequelize";
import configuration from "../config/config.js";
import usersPlansDefinition from "./users_plans.js";
import usersDefinition from "./users.js";

const env = process.env.NODE_ENV || "development";
const config = configuration[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db["Users"] = usersDefinition(sequelize, Sequelize.DataTypes);
db["Users_Plans"] = usersPlansDefinition(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
