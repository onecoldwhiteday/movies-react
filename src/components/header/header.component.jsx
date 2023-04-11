import { List, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./headers.styles.scss";

export const Header = (props) => {
  const title = "Movies";

  return (
    <div className="App-navbar">
      <div className="navbar-element">
        <button className="nav-btn" onClick={props.onShow}>
          <List className="menu-icon"></List>
        </button>
      </div>
      <div className="navbar-element">
        <Link to="/" className="main-title-link">
          <h1 className="main-title text-center font-weight-bold">
            {title.toUpperCase()}
          </h1>
        </Link>
      </div>
      <div className="navbar-element">
        <button className="nav-btn">
          <Search className="menu-icon"></Search>
        </button>
      </div>
    </div>
  );
};
