import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../store/context/AuthContext";

export function Register() {
  const { register } = useContextSelector(AuthContext, (context) => {
    return {
      register: context.register
    };
  });

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

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      email: form.email.value,
      password: form.password.value
    };
    const resp = await register(data.email, data.password);

    if (!resp.code) {
      //clear the form
      setForm({
        email: {
          hasChanged: false,
          value: ""
        },
        password: {
          hasChanged: false,
          value: ""
        }
      });
    }
  }

  return (
    <main
      className={`min-h-screen flex-column gap-9 flex-center bg-solid px-4 sm:px-0`}
    >
      <div
        className={`max-w-xs bg-secondary/80 text-white w-full flex-column gap-4 shadow-2xl rounded-md p-8 lg:max-w-lg`}
      >
        <h2 className="text-center mb-3 text-xl font-semibold ">
          Realize seu cadastro na plataforma
        </h2>
        <form onSubmit={handleRegister}>
          <fieldset className="w-full p-3 space-y-3">
            <legend className="text-xl font-semibold" />

            <label htmlFor="email" className="flex-column gap-px">
              E-mail:
              <input
                className="input input-clean"
                type="email"
                placeholder="exemplo@mail.com"
                value={form.email.value}
                onChange={(event) => handleEmailChange(event)}
                data-testid="email"
              />
              {form.email.hasChanged && !form.email.value ? (
                <span
                  data-testid="email-required"
                  className="text-sm font-semibold leading-relaxed  text-amber-500"
                >
                  Email é obrigatório
                </span>
              ) : form.email.hasChanged && !isEmailValid(form.email.value) ? (
                <span
                  data-testid="email-invalid"
                  className="text-sm font-semibold leading-relaxed  text-amber-500"
                >
                  Email é inválido
                </span>
              ) : (
                <span
                  data-testid="name-required"
                  className="text-sm font-semibold leading-relaxed invisible"
                >
                  -
                </span>
              )}
            </label>

            <label htmlFor="password" className="flex-column gap-px">
              Senha:
              <input
                className="input input-clean"
                type="password"
                placeholder="Senha"
                value={form.password.value}
                onChange={(event) => handlePasswordChange(event)}
                data-testid="password"
              />
              {form.password.hasChanged && !form.password.value ? (
                <span
                  data-testid="password-required"
                  className="text-sm font-semibold leading-relaxed  text-amber-500"
                >
                  Senha é obrigatória
                </span>
              ) : form.password.hasChanged && form.password.value.length < 6 ? (
                <span className="text-sm font-semibold leading-relaxed  text-amber-500">
                  A senha precisa ter mínimo de 6 caracteres
                </span>
              ) : (
                <span
                  data-testid="name-required"
                  className="text-sm font-semibold leading-relaxed invisible"
                >
                  -
                </span>
              )}
            </label>
          </fieldset>

          <div className="w-full px-7">
            <button
              type="submit"
              data-testid="login-button"
              disabled={!isEmailValid(form.email.value) || !form.password.value}
              className="bg-green-500 w-full rounded font-semibold h-10 text-white hover:bg-green-600 transition-colors disabled:bg-green-500/40 disabled:text-white/40 disabled:cursor-not-allowed"
            >
              Inscrever-se
            </button>
          </div>

          <div className="px-3 w-full ">
            <div className="border-t-2 border-zinc-950 px-3 mt-4 mb-5 pt-4 text-sm sm:text-base">
              <p>
                Você já tem conta?{" "}
                <Link to={"/login"} className="text-blue-50 underline">
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
