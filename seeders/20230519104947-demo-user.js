const up = (queryInterface) => {
  return queryInterface.bulkInsert("Users", [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      password: "$2b$10$LS8czF3m1IRPZRzgdkyWHOsQDcMz/H3TYkFEbMqKLDf.RyrkBrYAi",
      salt: "$2b$10$LS8czF3m1IRPZRzgdkyWHO",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      password: "$2b$10$LS8czF3m1IRPZRzgdkyWHOsQDcMz/H3TYkFEbMqKLDf.RyrkBrYAi",
      salt: "$2b$10$LS8czF3m1IRPZRzgdkyWHO",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

const down = (queryInterface) => {
  return queryInterface.bulkDelete("Users", null, {});
};

export { up, down };
