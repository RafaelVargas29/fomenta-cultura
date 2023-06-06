import { Link } from "react-router-dom";
import ImageAlt from "../assets/images/brand/logo-alt.png";

export function Logo() {
  return (
    <Link to={"/dashboard"} title="Início">
      <img src={ImageAlt} alt="Logo" />
    </Link>
  );
}
