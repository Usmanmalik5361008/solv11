import { registerApiAxiosParams } from "api/axiosHookParams";
import { LOCAL_STORAGE_VALUES } from "constants/common";
import { useAxios } from "hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { onLogin } from "services/redux/slices/user";
import { useDispatch } from "react-redux";

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { callAxios, loading } = useAxios(registerApiAxiosParams);

  const handleNavigation = (to) => () => {
    navigate(to);
  };

  const handleRegisterFormSubmit = handleSubmit(async (values) => {
    const payload = { ...values };
    const { success, data } = await callAxios({
      data: payload,
    });
    if (success) {
      const { user, token } = data;
      localStorage.setItem(LOCAL_STORAGE_VALUES.TOKEN, token);
      dispatch(onLogin(user));
    }
  });

  return {
    handleRegisterFormSubmit,
    register,
    errors,
    loading,
    handleNavigation,
  };
};

export default useRegister;
