export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "وارد کردن نام الزامی است";
  } else {
    delete errors.name;
  }

  if (!data.email.trim()) {
    errors.email = "وارد کردن ایمیل الزامی است";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "وارد کردن پسوورد الزامی است";
  } else if (data.password.length <= 5) {
    errors.password = "پسوورد حداقل باید شامل 6 حرف باشد";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "لطفا پسوورد خود را مجددا وارد کنید";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "پسوورد مطابقت ندارد";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "قبول قوانین سایت الزامی است";
  }

  return errors;
};
