import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>User App</h2>

      <div>
        <Link to="/">Add User</Link>

        <Link to="/users">Show Users</Link>
      </div>
    </nav>
  );
}

export default Navbar;