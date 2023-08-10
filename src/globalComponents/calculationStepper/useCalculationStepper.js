import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getStepNumber } from "./utils";
import { mapper } from "./mapper";

const useCalculationStepper = () => {
  const { notifications } = useSelector((state) => state.notification);

  const items = useMemo(
    () =>
      notifications.map(({ title, body }) => {
        const step = getStepNumber(body);
        let toReturn = null;
        for (const stepRange in mapper) {
          const [lowerRange, upperRange] = stepRange.split("_");
          console.log({ step, lowerRange, upperRange });
          if (step > +lowerRange && step < +upperRange) {
            toReturn = mapper[stepRange];
            break;
          } else if (step === lowerRange || step === upperRange) {
            toReturn = mapper[stepRange];
            break;
          }
        }
        return toReturn;
      }),
    [notifications]
  );

  const current = 1;

  return { items, current };
};

export default useCalculationStepper;
