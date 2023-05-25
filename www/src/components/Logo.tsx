import { Link } from "react-router-dom";
import Images from "../assets/brand/logo.png";
import ImageAlt from "../assets/brand/logo-alt.png";

interface LogoProps {
  alt?: boolean;
}

export function Logo({ alt }: LogoProps) {
  return (
    <Link
      to={"/dashboard"}
      className="block w-full object-cover"
      title="Início"
    >
      {alt ? (
        <img src={ImageAlt} alt="Logo" />
      ) : (
        <img src={Images} alt="Logo" />
      )}
    </Link>
  );
}
