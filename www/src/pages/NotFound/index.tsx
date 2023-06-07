import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-zinc-900 text-white">
        404 Page Not Found
      </div>
      <Link to={"/"}>voltar</Link>
    </>
  );
}
