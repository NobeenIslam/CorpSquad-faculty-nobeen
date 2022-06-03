import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <div className="navbar navbar-default navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Back to Dashboard</Link>
          </li>
        </ul>
        <div className="navbar-brand navbar-right">Corpfolio</div>
      </div>
    </div>
  );
}
