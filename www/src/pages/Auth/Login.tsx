import { useState } from "react";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useToggle } from "../../hooks/useToggle";
import { AuthContext } from "../../store/context/AuthContext";

const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .regex(/\S+@\S+\.\S+/i, {
      message: "O email é inválido."
    })
    .transform((email: string) => email.toLowerCase()),

  password: z
    .string()
    .nonempty("A senha é obrigatório")
    .min(6, "A senha precisa de no minímo 6 caracteres")
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

export function Login() {
  const navigate = useNavigate();
  const { toggle, handleToggle } = useToggle();
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { email: "", password: "" }
  });
  const { makeLogin } = useContextSelector(AuthContext, (context) => {
    return {
      makeLogin: context.login
    };
  });

  async function setLogin(data: LoginFormData) {
    const { email, password } = data;
    const response = await makeLogin(email, password);
    if (response) {
      reset();
      navigate("/dashboard");
    } else {
      setError(true);
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
          Realize seu login na plataforma
        </h2>
        <form onSubmit={handleSubmit(setLogin)} className="space-y-5">
          <fieldset className="w-full p-3 space-y-3">
            <label htmlFor="email" className="flex-column gap-px">
              E-mail:
              <input
                className="input input-clean"
                type="email"
                placeholder="exemplo@mail.com"
                {...register("email")}
              />
              {errors.email ? (
                <span className="text-xs pl-1 text-primary">
                  {errors.email.message}{" "}
                </span>
              ) : (
                <span className="text-xs pl-1" />
              )}
            </label>

            <div className="flex-column gap-1">
              <label className="relative w-full">
                Senha:
                <input
                  className="input input-clean"
                  type={toggle ? "text" : "password"}
                  placeholder="Senha"
                  {...register("password")}
                />
                <div
                  className="text-black cursor-pointer absolute right-4 top-9"
                  onClick={handleToggle}
                >
                  {toggle ? (
                    <FiEye className="icon" />
                  ) : (
                    <FiEyeOff className="icon" />
                  )}
                </div>
              </label>
              {errors.password ? (
                <span className="text-xs pl-1 text-primary">
                  {errors.password.message}
                </span>
              ) : (
                <span className="text-xs pl-1" />
              )}
            </div>
          </fieldset>

          <div className="w-full px-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 w-full rounded font-semibold h-10 text-white hover:bg-green-600 transition-colors disabled:bg-green-500/40 disabled:text-white/40 disabled:cursor-not-allowed"
            >
              Entrar
            </button>
            {error && (
              <span className="flex-center mt-3">Email ou Senha incorreta</span>
            )}
          </div>

          <div className="px-3 w-full ">
            <div className="border-t-2 border-zinc-950 px-3 mt-4 mb-5 pt-4 text-sm sm:text-base">
              <p>
                Você já tem conta?{" "}
                <Link to={"/register"} className="text-blue-50 underline">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
