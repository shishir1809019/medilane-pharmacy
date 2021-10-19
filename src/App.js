import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Banner from "./components/Home/Banner/Banner";
import Services from "./components/Home/Services/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Service from "./components/Home/Service/Service";
import Home from "./components/Home/Home/Home";
import MediDetails from "./components/Home/MediDetails/MediDetails";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:id">
              <MediDetails></MediDetails>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blogs />
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
