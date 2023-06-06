interface WelcomeProps {
  name: string;
}

export function Welcome({ name }: WelcomeProps) {
  return (
    <>
      <strong className="text-xl ">Bem-vindo, {name}!</strong>
    </>
  );
}
