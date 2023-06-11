var data = require("./fakeData");
var validatePermissionsMiddleware = require("./permissionsMiddleware");

module.exports = function (req, res) {
  const userId = req.query.id;
  const permission = req.query.permission;

  validatePermissionsMiddleware(req, res, permission, () => {
    const userIndex = data.findIndex((user) => user.id === userId);

    if (userIndex === -1) return res.status(404).send("Usuário não encontrado");

    data[userIndex].name = req.body.name;
    data[userIndex].job = req.body.job;

    res.send(data[userIndex]);
  });
};