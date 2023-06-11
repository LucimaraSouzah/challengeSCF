var data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  if (!name || !job) {
    return res
      .status(400)
      .json({ error: "Os campos 'name' e 'job' são obrigatórios" });
  }

  const newUser = {
    name,
    job,
  };

  try {
    data.push(newUser);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar o novo usuário" });
  }
};
