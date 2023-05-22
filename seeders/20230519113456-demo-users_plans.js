const up = (queryInterface) => {
  return queryInterface.bulkInsert("Users_Plans", [
    {
      id: 1,
      userId: 1,
      maxRequestsPerMonth: 10,
      startDate: new Date("03-30-2023"),
      requestsPerSecond: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      userId: 2,
      maxRequestsPerMonth: 20,
      startDate: new Date("02-29-2020"),
      requestsPerSecond: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

const down = (queryInterface) => {
  return queryInterface.bulkDelete("Users_Plans", null, {});
};

export { up, down };
