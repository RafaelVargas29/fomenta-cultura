import { Link } from "react-router-dom";
import ViewContainer from "../../../layouts/ViewContainer";
import { BiLeftArrowAlt, BiSave } from "react-icons/bi";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../lib/axios/api";

export function CreateActivity() {
  const [form, setForm] = useState({
    name: {
      hasChanged: false,
      value: ""
    },
    description: {
      hasChanged: false,
      value: ""
    },
    dateEvent: {
      hasChanged: false,
      value: ""
    },
    hoursEvent: {
      hasChanged: false,
      value: ""
    }
  });
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      name: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      description: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
  function handleDateEventChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      dateEvent: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
  function handleHoursEventChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      hoursEvent: {
        hasChanged: true,
        value: event.target.value
      }
    });
  }
  async function handleCreateActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const information = {
      name: formData.get("name"),
      description: formData.get("description"),
      dateEvent: formData.get("dateEvent"),
      hoursEvent: formData.get("hoursEvent"),
      status: "agendado"
    };
    const result = await api.post("activities", information);
    console.log(result);

    setForm({
      name: {
        hasChanged: false,
        value: ""
      },
      description: {
        hasChanged: false,
        value: ""
      },
      dateEvent: {
        hasChanged: false,
        value: ""
      },
      hoursEvent: {
        hasChanged: false,
        value: ""
      }
    });
  }
  return (
    <ViewContainer>
      <Link
        to={"/dashboard"}
        className="text-primary flex items-center font-bold mt-3 ml-4 hover:text-primary/70"
      >
        <BiLeftArrowAlt className="icon" />
        <span>Voltar ao início</span>
      </Link>
      <form
        onSubmit={(e) => handleCreateActivity(e)}
        className="p-8 max-w-[730px] bg-white flex flex-col rounded-lg m-auto"
      >
        <h1 className="text-lg md:text-xl mb-2">Cadastro de Atividade</h1>
        <fieldset>
          <label htmlFor="name" className="flex-1 flex flex-col mb-6">
            Nome
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome da Atividade"
              className="input input-clean bg-gray-200"
              value={form.name.value}
              onChange={(event) => handleNameChange(event)}
              data-testid="name"
            />
          </label>
          <label htmlFor="description" className="flex-1 flex flex-col mb-6">
            Descrição
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição da atividade..."
              className="input input-clean bg-gray-200"
              value={form.description.value}
              onChange={(event) => handleDescriptionChange(event)}
              data-testid="description"
            />
          </label>
          <div className="flex flex-wrap gap-4">
            <label htmlFor="dateEvent" className="flex-1 flex flex-col mb-6">
              Data
              <input
                type="date"
                name="dateEvent"
                id="dateEvent"
                className="input input-clean bg-gray-200"
                value={form.dateEvent.value}
                onChange={(event) => handleDateEventChange(event)}
                data-testid="dateEvent"
              />
            </label>
            <label htmlFor="hoursEvent" className="flex-1 flex flex-col mb-6">
              Hora
              <input
                type="text"
                name="hoursEvent"
                id="hoursEvent"
                placeholder="00:00"
                className="input input-clean bg-gray-200"
                value={form.hoursEvent.value}
                onChange={(event) => handleHoursEventChange(event)}
                data-testid="hoursEvent"
              />
            </label>
          </div>
        </fieldset>
        <div className="flex justify-end">
          <button
            type="submit"
            data-testid="login-button"
            disabled={
              !form.name.value ||
              !form.description.value ||
              !form.dateEvent.value ||
              !form.hoursEvent.value
            }
            className="text-white w-36 flex items-center gap-2 btn bg-success disabled:bg-primary/50 disabled:cursor-not-allowed "
          >
            <BiSave className="icon" />
            <span className="font-semibold">Salvar</span>
          </button>
        </div>
      </form>
    </ViewContainer>
  );
}
