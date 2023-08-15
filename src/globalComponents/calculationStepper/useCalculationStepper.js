import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getStepNumber } from "./utils";
import { mapper } from "./mapper";

const useCalculationStepper = () => {
  const { notifications } = useSelector((state) => state.notification);

  const items = useMemo(() => {
    if (!notifications?.length) return [];
    const distinctSteps = new Map();

    notifications.forEach(({ body }) => {
      const step = getStepNumber(body);

      if (body.startsWith("INFO COMPLETED")) {
        distinctSteps.set(
          `INFO_COMPLETED_${Date.now()}`,
          mapper["INFO_COMPLETED"]
        ); // Ensure uniqueness
        return;
      }

      for (const stepRange in mapper) {
        if (stepRange.includes("_")) {
          const [lowerRange, upperRange] = stepRange.split("_");
          if (step >= +lowerRange && step <= +upperRange) {
            distinctSteps.set(mapper[stepRange].title, mapper[stepRange]);
            break;
          }
        } else if (step == stepRange) {
          distinctSteps.set(mapper[stepRange].title, mapper[stepRange]);
          break;
        }
      }
    });

    const stepsArray = [...distinctSteps.values()].reverse();
    // Append a new step at the end

    return stepsArray;
  }, [notifications]);

  const current = items.length - 1;

  return { items, current };
};

export default useCalculationStepper;
