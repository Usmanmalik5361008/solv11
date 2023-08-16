import { useDispatch } from "react-redux";
import { onCurrentAppChosen } from "services/redux/slices/user";

const useAppChoice = () => {
  const dispatch = useDispatch();

  const handleAppChoice = (choiceNumber) => () => {
    console.log({ fired: 1 });
    choiceNumber === 1 && dispatch(onCurrentAppChosen());
  };

  return { handleAppChoice };
};

export default useAppChoice;
