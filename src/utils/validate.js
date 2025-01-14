export const checkValidData = (email, password, name) => {
  const fullNameRegex = /^.{8,}$/;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (name !== undefined) {
    const isNameValid = fullNameRegex.test(name);
    if (!isNameValid) return "Your Full Name must be 8 characters long";
  }

  if (!isEmailValid) return "Please enter a valid email";
  if (!isPasswordValid)
    return "Password must be of length 8 contain lowercase, uppercase, numbers and special characters";

  return null;
};
