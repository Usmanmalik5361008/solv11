import { Col, Divider, Row, Grid } from "antd";
import { CsvEditor } from "globalComponents";
import { ConfirmationBox } from "globalComponents";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

const HypothesesShockPage = () => {
  const { t } = useTranslation();
  const screens = useBreakpoint();

  return (
    <div className="card-view card-padding">
      <CsvEditor />
    </div>
  );
};

export default HypothesesShockPage;
