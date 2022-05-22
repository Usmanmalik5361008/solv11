import RouterConfig from "navigation";
import { useTranslation } from "react-i18next";
import "styles/main.scss";



function App() {
  const {ready} = useTranslation();
  if (!ready) {
    return <div/>;
  }
  return <RouterConfig />;
}

export default App;
