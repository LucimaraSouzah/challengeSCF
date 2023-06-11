var data = require("./fakeData");
var validatePermissionsMiddleware = require("./permissionsMiddleware");

module.exports = function (req, res) {
  const name = req.query.name;
  const permission = req.query.permission;

  validatePermissionsMiddleware(req, res, permission, () => {
    const updatedData = data.filter((user) => user.name === name);

    if (updatedData.length === 0)
      return res.status(404).send("Usuário não encontrado");

    data = updatedData;

    res.send("Usuário removido com sucesso");
  });
};