import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <div className="navBar">
      <div className = "homeLink">
        <Link  to="/">Back to Dashboard</Link>
      </div>
      <div className="logo">Corpfolio</div>
    </div>
  );
}
