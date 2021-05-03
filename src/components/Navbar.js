import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Services from './pages/Services';
import Products from './pages/Products';


export default function Navbar() {
  const [click, setClick] = useState(false);
  const [pcNav, setPcNav] = useState(true);

  function toggleClick() {
    setClick(!click);
  }

  function closeMobileMenu() {
    setClick(false);
  }

  function togglePcNav() {
    if (window.innerWidth < 768) {
      setPcNav(false);
    } else {
      setPcNav(true);
    }
    // console.log(pcNav);
  }

  useEffect(() => {
    togglePcNav();
  }, []);

  window.addEventListener("resize", togglePcNav);

  return (
    <Router>
      <header className="main-header">
        <div className="header-container">
          <Link to="/" className="logo">
            TRAVEL
          </Link>
          <div className="menu-icon" onClick={toggleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
        {/* 토글 메뉴 클릭시 메뉴 열기 */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className="nav-link" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}
