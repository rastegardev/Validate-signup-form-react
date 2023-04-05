export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else {
    delete errors.name;
  }

  if (!data.email.trim()) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length <= 5) {
    errors.password = "Password must be at least 6 characters";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Password don't match";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "You must confirm our terms";
  }

  return errors;
};
