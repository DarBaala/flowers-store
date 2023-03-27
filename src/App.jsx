import "./scss/style.scss";
import bg from "./assets/img/bg.svg";

import Home from "./pages/Home";

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="wrapper">
      <div className="wrapper__margins">
        <Home />
      </div>
    </div>
  );
};

export default App;
