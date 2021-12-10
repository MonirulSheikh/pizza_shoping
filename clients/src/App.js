import "./App.css";
import { BrowserRouter } from "react-router-dom"
import Topbar from "./componants/Topbar";
import { Route, Switch } from "react-router-dom"
import About from "./componants/About";
import HomePage from "./screen/HomePage";
import Contact from "./componants/Contact";
import NavBar from "./componants/NavBar";
import Register from "./screen/Register";
import CartScreen from "./screen/CartScreen"
import Login from "./screen/Login";
import OrderScreen from "./screen/OrderScreen";
import AdminScreen from "./screen/AdminScreen";
function App() {
  return (
    <BrowserRouter>
      {/* <Topbar /> */}
      <NavBar />
      <Switch>
      
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} />
<Route path="/register" component={Register}/>
<Route path="/cart" component={CartScreen}/>
<Route path="/orders"  component={OrderScreen}/>
<Route path="/login" component={Login}/>

<Route path="/admin" component={AdminScreen}/>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
