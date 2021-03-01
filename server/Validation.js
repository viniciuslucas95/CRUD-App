exports.ValidateUser = function (user) {
  if (user.username === undefined) return 'Username cannot be empty.';
  else if (user.username.length < 6) return 'Username is too short.';
  if (user.password === undefined) return 'Password cannot be empty.';
  else if (user.password.length < 6) return 'Password is too short.';

  return '';
};
