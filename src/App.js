import "./App.css";
import CarPage from "./components/CarPage/CarPage";
import Card from "./components/Card/Card";
import ConfirmPage from "./components/ConfirmPage/ConfirmPage";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import RentalCarSearch from "./components/RentalCarSearch/RentalCarSearch";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RentalCarSearch /> */}
      {/* <Card />   */}
      {/* <SignIn /> */}
      <CarPage />
      {/* <ConfirmPage /> */}
      {/* <RentalCarSearch /> */}
      {/* <CarPage /> */}
    </div>
  );
}

export default App;
