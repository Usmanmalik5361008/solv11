import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { getStepNumber } from "./utils";
import { mapper } from "./mapper";

const useCalculationStepper = () => {
  const { notifications } = useSelector((state) => state.notification);
  const { current: sortedKeys } = useRef(
    Object.keys(mapper).sort((a, b) => {
      const [aStart] = a.split("_");
      const [bStart] = b.split("_");
      return Number(aStart) - Number(bStart);
    })
  );

  const items = useMemo(() => {
    return sortedKeys.map((key) => mapper[key]);
  }, [sortedKeys]);

  const current = useMemo(() => {
    if (!notifications?.length) return -1; // Default to no active step if no notifications.

    const keys = sortedKeys;
    let current = -1;

    // Loop through notifications to find the current step
    for (const { body } of notifications) {
      const step = getStepNumber(body);
      current = -1;
      for (const key of keys) {
        ++current;
        const [lower, upper] = key.split("_");
        if (step < +upper && step > +lower) {
          return current;
        } else if (step === +upper) {
          return current;
        } else if (step === +lower) {
          return current;
        } else if (key === "INFO_COMPLETED") {
          return current - 1;
        }
      }
    }

    return current;
  }, [notifications, sortedKeys]);

  useEffect(() => {
    console.log({ current });
  }, [current]);

  return { items, current };
};

export default useCalculationStepper;
