import { EMAIL_ICON, EYE_CROSSED } from "assets";
import { SubLoader } from "globalComponents";
import { InputField } from "globalComponents";
import { getFormRules } from "./formRules";
import useRegister from "./useRegister";

const RegisterPage = () => {
  const {
    handleRegisterFormSubmit,
    register,
    errors,
    loading,
    handleNavigation,
  } = useRegister();

  const formRules = getFormRules(register);

  return (
    <>
      <SubLoader loading={loading} overlay={true} />
      <form onSubmit={handleRegisterFormSubmit}>
        <div className="form-field">
          <label>Full Name</label>
          <InputField
            name="name"
            error={errors["name"]}
            {...formRules["name"]}
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <InputField
            name="email"
            prependIcon={EMAIL_ICON}
            error={errors["email"]}
            {...formRules["email"]}
          />
        </div>
        <div className="form-field">
          <label>Password</label>
          <InputField
            name="password"
            type="password"
            prependIcon={EYE_CROSSED}
            error={errors["password"]}
            {...formRules["password"]}
          />
        </div>
        <select className="dropdown-style-1">
          <option>Production</option>
          <option>Developement</option>
        </select>
        <button className="btn-gradient" type="submit">
          Get Started
        </button>{" "}
        <p className="text-xxs mt-2 subtle-text">
          Already have an account ?{" "}
          <mark
            className="primary-text-color cursor-pointer"
            onClick={handleNavigation("/auth/signin")}
          >
            Login
          </mark>{" "}
        </p>
      </form>
    </>
  );
};

export default RegisterPage;
