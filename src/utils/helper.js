exports.handelValidationErrors = (err, res) => {
  const errors = Object.keys(err.errors);
  const errRes = {};
  errors?.map((error) => {
    errRes[error] = err.errors[error].message;
  });
  res.status(400).json({ errors: errRes });
};
exports.handelUnauthentecatedErrors = (res) => {
  res.status(401).json({
    status: "UNAUTHENTECATED".toLowerCase(),
    message: "this page is protected, allowed only for logged in user",
  });
};
