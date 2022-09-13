exports.Validation = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
