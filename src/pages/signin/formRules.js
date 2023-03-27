export const getFormRules = (register) => ({
  email: register("email", {
    required: {
      value: true,
      message: "Email is required",
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  }),
  password: register("password", {
    required: {
      value: true,
      message: "Password is required",
    },
  
  }),
});
