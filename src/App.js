import RouterConfig from "navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "styles/main.scss";

function App() {
  const { ready } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/signin");
  }, []);

  if (!ready) {
    return <div />;
  }
  return <RouterConfig />;
}

export default App;
