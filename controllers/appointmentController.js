exports.test = (req, res, next) => {
  res.status(200).json({msg: "protected route works"});
}
