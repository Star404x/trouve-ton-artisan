const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: "Route API introuvable.",
  });
};

module.exports = notFoundHandler;
