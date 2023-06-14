import LogoImg from "../assets/images/brand/logo-icon.png";

export function Logo() {
  return (
    <div className="flex gap-2 flex-shrink-0 flex-center">
      <div className="w-[80px]">
        <img src={LogoImg} alt="logo" className="object-contain" />
      </div>
      <p className="logo_text">Fomenta Cultura</p>
    </div>
  );
}
