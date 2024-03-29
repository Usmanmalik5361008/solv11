import { EMAIL_ICON, EYE_CROSSED } from "assets";
import { SubLoader } from "globalComponents";
import { InputField } from "globalComponents";
import { getFormRules } from "./formRules";
import useSignin from "./useSignin";

const SigninPage = () => {
  const { handleLoginFormSubmit, handleNavigation, loading, register, errors } =
    useSignin();

  const formRules = getFormRules(register);

  return (
    <>
      <SubLoader loading={loading} overlay={true} />
      <form onSubmit={handleLoginFormSubmit}>
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
            prependIcon={EYE_CROSSED}
            error={errors["password"]}
            type="password"
            {...formRules["password"]}
          />
        </div>
        <select className="dropdown-style-1">
          <option>Production</option>
          <option>Developement</option>
        </select>

        <button className="btn-gradient" type="submit">
          Get Started
        </button>
        <p className="text-xxs mt-2 subtle-text">
          Dont have an account ?{" "}
          <mark
            className="primary-text-color cursor-pointer"
            onClick={handleNavigation("/auth/register")}
          >
            Register
          </mark>{" "}
        </p>
      </form>
    </>
  );
};

export default SigninPage;
