import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: ""
    },
    password: {
      hasChanged: false,
      value: ""
    }
  });

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      email: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      password: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }

  return (
    <main
      className={`min-h-screen  flex flex-col gap-9 items-center justify-center px-4 sm:px-0`}
    >
      <div
        className={`max-w-xs bg-secondary/80 text-white w-full flex flex-col gap-4 shadow-2xl rounded-md p-8 lg:max-w-lg`}
      >
        <h2 className="text-center mb-3 text-xl font-semibold ">
          Realize seu login na plataforma
        </h2>
        <form className={`flex flex-col gap-4`}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input
              className="input input-clean"
              type="email"
              placeholder="E-mail"
              value={form.email.value}
              onChange={(event) => handleEmailChange(event)}
              data-testid="email"
            />
            {form.email.hasChanged && !form.email.value ? (
              <span
                data-testid="email-required"
                className="text-sm font-medium leading-relaxed pl-1 text-amber-500"
              >
                Email é obrigatório
              </span>
            ) : form.email.hasChanged && !isEmailValid(form.email.value) ? (
              <span
                data-testid="email-invalid"
                className="text-sm font-medium leading-relaxed pl-1 text-amber-500"
              >
                Email é inválido
              </span>
            ) : (
              <span className="text-sm font-medium leading-relaxed pl-1">
                Digite seu e-mail{" "}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Senha</label>
            <div className="relative w-full">
              <input
                className="input input-clean"
                type={"password"}
                placeholder="Senha"
                value={form.password.value}
                onChange={(event) => handlePasswordChange(event)}
                data-testid="password"
              />
            </div>
            {form.password.hasChanged && !form.password.value ? (
              <span
                data-testid="password-required"
                className="text-sm font-medium leading-relaxed pl-1 text-amber-500"
              >
                Senha é obrigatória
              </span>
            ) : (
              <span className="text-sm font-medium leading-relaxed pl-1">
                Digite sua senha{" "}
              </span>
            )}
          </div>
          <button
            type="submit"
            data-testid="login-button"
            disabled={!isEmailValid(form.email.value) || !form.password.value}
            className="bg-green-500 rounded font-semibold h-10 text-white hover:bg-green-600 transition-colors disabled:bg-green-500/40 disabled:text-white/40 disabled:cursor-not-allowed"
          >
            Entrar
          </button>

          <div className="border-t-2 border-zinc-950 mt-4 pt-4 text-sm sm:text-base">
            <p>
              Não tem uma conta?{" "}
              <Link to={"/auth/register"} className="text-blue-50 underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
