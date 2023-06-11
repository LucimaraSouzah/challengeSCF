var data = require("./fakeData");

module.exports = function (req, res) {
  var name = req.query.name;

  const user = data.find((user) => user.name === name);

  if (user) {
    const readCount = user.readCount || 0;
    res.send(`O usuário ${name} foi lido ${readCount} vezes.`);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};