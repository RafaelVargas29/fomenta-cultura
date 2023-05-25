import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
dayjs.locale(ptBr);

export function Header() {
  return (
    <header className="h-24 bg-white shadow rounded-sm px-8 flexCenter justify-between">
      <strong className="text-xl ">Bem-vindo, Alguem!</strong>
      <strong>{dayjs().format("DD[/]MM[/]YYYY")}</strong>
    </header>
  );
}
