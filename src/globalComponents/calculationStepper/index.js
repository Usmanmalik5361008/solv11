import { Steps } from "antd";
import useCalculationStepper from "./useCalculationStepper";
import "./index.scss";

const CalculationStepper = () => {
  const { items, current } = useCalculationStepper();

  console.log({ items });
  return (
    <div className="calculation-steps-wrapper">
      <div className="calculation-steps-header">
        <h4 className="m-0">Cal Cul Du SCR</h4>
      </div>
      <div className="calculation-steps-body">
        <Steps direction="vertical" size="small" current={current}>
          {items.map((item) => (
            <Steps.Step {...item} key={item?.title} />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default CalculationStepper;
