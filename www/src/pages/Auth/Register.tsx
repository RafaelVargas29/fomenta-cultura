/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../libs/axios/api";
import axios from "axios";
import { Address, Organization } from "../../models/Organization";

export function Register() {
  const navigate = useNavigate();
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address>({} as Address);
  const [form, setForm] = useState({
    name: {
      hasChanged: false,
      value: ""
    },
    number: {
      hasChanged: false,
      value: ""
    },
    complement: {
      hasChanged: false,
      value: ""
    },
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

  useEffect(() => {
    console.log(address);
  }, [address]);

  async function buscarDados() {
    console.log("ir no viacep com o valor de cep = ", cep);
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (result.status === 200) {
      console.log(result.data);
      const obj: Address = {
        cep: result.data.cep,
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        localidade: result.data.localidade,
        uf: result.data.uf
      };
      setAddress(obj);
    }
  }

  function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      number: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
  function handleComplementChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      complement: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
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
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      name: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }

  async function handleCreateUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userDatas = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    };
    const addre = {
      cep: address.cep,
      logradouro: address.logradouro,
      bairro: address.bairro,
      localidade: address.localidade,
      uf: address.uf,
      number: form.number.value,
      complement: form.complement.value
    };
    const org: Organization = {
      name: userDatas.name,
      email: userDatas.email,
      password: userDatas.password,
      address: addre
    };

    await api.post("users", org);
    alert("Usuario Criado");
    navigate(`/login`);
  }

  return (
    <main
      className={`min-h-screen bg-solid flex-center flex-column p-4 sm:px-0`}
    >
      <div
        className={`max-w-lg bg-secondary/80 text-white w-full shadow-2xl rounded-lg`}
      >
        <h2 className="text-center mb-3 text-xl font-semibold p-7 ">
          Realize seu cadastro na plataforma
        </h2>
        <form onSubmit={(e) => handleCreateUser(e)} className={``}>
          <fieldset className="w-full p-3 space-y-3">
            <legend className="text-xl font-semibold">Dados</legend>
            <label htmlFor="name" className="flex-column gap-px">
              Nome da Entidade:
              <input
                type="text"
                className="input input-clean"
                id="name"
                name="name"
                value={form.name.value}
                onChange={(event) => handleNameChange(event)}
                data-testid="name"
              />
              {form.name.hasChanged && !form.name.value ? (
                <span
                  data-testid="name-required"
                  className="text-sm font-semibold leading-relaxed text-amber-500"
                >
                  Nome é obrigatória
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

            <label htmlFor="email" className="flex-column gap-px">
              E-mail:
              <input
                className="input input-clean"
                type="email"
                placeholder="example@mail.com"
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
                placeholder=""
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
          <fieldset className="w-full p-3 space-y-3">
            <legend className="text-xl font-semibold">Endereço</legend>
            <label htmlFor="cep" className="flex-column gap-px">
              CEP:
              <input
                type="text"
                className="input input-clean"
                id="cep"
                name="cep"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                onMouseOut={() => buscarDados()}
                data-testid="cep"
              />
            </label>
            <div className="flex-start gap-3">
              <label className="flex-column gap-px flex-1">
                Logradouro:
                <input disabled className="input" value={address?.logradouro} />
              </label>
              <label htmlFor="number" className="flex-column gap-px w-1/4">
                Número:
                <input
                  className="input input-clean"
                  type="text"
                  id="number"
                  name="number"
                  value={form.number.value}
                  onChange={(event) => handleNumberChange(event)}
                  data-testid="name"
                />
              </label>
            </div>
            <div className="flex-start gap-3">
              <label className="flex-column gap-px w-1/2">
                Bairro:
                <input disabled className="input" value={address?.bairro} />
              </label>
              <label className="flex-column gap-px w-1/2">
                Cidade:
                <input disabled className="input" value={address?.localidade} />
              </label>
              <label className="flex-column gap-px   w-1/4">
                UF:
                <input disabled className="input" value={address?.uf} />
              </label>
            </div>
            <label className="flex-column gap-px w-1/2">
              Complemento:
              <input
                className="input input-clean"
                value={form.complement.value}
                onChange={(event) => handleComplementChange(event)}
              />
            </label>
          </fieldset>

          <button
            type="submit"
            data-testid="login-button"
            disabled={
              !isEmailValid(form.email.value) ||
              !form.password.value ||
              !form.name.value
            }
            className="bg-green-500 rounded font-semibold h-10 text-white hover:bg-green-600 transition-colors disabled:bg-green-500/40 disabled:text-white/40 disabled:cursor-not-allowed"
          >
            Inscrever-se
          </button>

          <div className="border-t-2 border-zinc-950 mt-4 pt-4 text-sm sm:text-base">
            <p>
              Você já tem conta?{" "}
              <Link to={"/login"} className="text-blue-50 hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
