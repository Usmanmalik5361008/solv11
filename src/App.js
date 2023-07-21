import { SubLoader } from "globalComponents";
import WithFirebaseNotification from "hoc/WithFirebaseNotification";
import RouterConfig from "navigation";
import "react-data-grid/lib/styles.css";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import store from "services/redux/store";
import "styles/main.scss";
import useApp from "useApp";

function App() {
  const { ready } = useTranslation();

  const { appLoading } = useApp();

  if (!ready) {
    return <div />;
  }
  return (
    <Provider store={store}>
      <WithFirebaseNotification>
        {appLoading ? (
          <SubLoader overlay={true} loading={true} />
        ) : (
          <RouterConfig />
        )}
      </WithFirebaseNotification>
    </Provider>
  );
}

export default App;
