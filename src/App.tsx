import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const content = useRoutes(routes);

  return <div className="container-fluid">{content}</div>;
}

export default App;
