import { loginApiAxiosParams } from "api/axiosHookParams";
import { LOCAL_STORAGE_VALUES } from "constants/common";
import { useAxios } from "hooks";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogin } from "services/redux/slices/user";

const useSignin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const { loading, callAxios } = useAxios(loginApiAxiosParams);

  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  const handleLoginFormSubmit = handleSubmit(async (values) => {
    const payload = { ...values };
    const result = await callAxios({
      data: payload,
    });
    if (result?.success) {
      let { user, token } = result?.data;
      localStorage.setItem(LOCAL_STORAGE_VALUES.TOKEN, token);

      dispatch(onLogin(user));
    }
  });

  return { handleNavigation, handleLoginFormSubmit, register, errors, loading };
};

export default useSignin;
