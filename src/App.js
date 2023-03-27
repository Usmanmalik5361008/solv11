import RouterConfig from "navigation";
import "react-data-grid/lib/styles.css";
import { useTranslation } from "react-i18next";
import store from "services/redux/store";
import { Provider } from "react-redux";
import "styles/main.scss";
import useApp from "useApp";
import { SubLoader } from "globalComponents";

function App() {
  const { ready } = useTranslation();

  const { appLoading } = useApp();

  if (!ready) {
    return <div />;
  }
  return (
    <Provider store={store}>
      {appLoading ? (
        <SubLoader overlay={true} loading={true} />
      ) : (
        <RouterConfig />
      )}
    </Provider>
  );
}

export default App;
