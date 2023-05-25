import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-col gap-12">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
