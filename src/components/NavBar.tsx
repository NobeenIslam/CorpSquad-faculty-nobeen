import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <nav>
      <Link to="/">Back to Dashboard</Link>
      <div>Corpfolio</div>
    </nav>
  );
}
