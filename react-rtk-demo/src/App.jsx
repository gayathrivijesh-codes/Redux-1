import "./App.css";
import { CakeView } from "./features/cake/CakeView";
import UserView from "./features/user/UserView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import CountView from "./features/counter/CountView";

function App() {
  return (
    <div className="App">
      <CountView />
    </div>
  );
}

export default App;
