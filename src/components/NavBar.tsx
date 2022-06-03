import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <div className="navbar navbar-default navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item active nav-link">
            <Link to="/">Back to Dashboard</Link>
          </li>
        </ul>
        <div className="navbar-brand navbar-right">Corpfolio</div>
      </div>
    </div>
  );
}
