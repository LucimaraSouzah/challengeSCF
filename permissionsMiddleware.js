const data = require("./fakeData");

function validatePermissionsMiddleware(req, res, permission, next) {
  const userName = req.query.name;

  const user = data.find(
    (user) =>
      user.name === userName &&
      user.permissions &&
      user.permissions.includes(permission)
  );

  if (!user) {
    return res
      .status(403)
      .send("Você não tem permissão para executar esta ação.");
  }

  next();
}

module.exports = validatePermissionsMiddleware;
