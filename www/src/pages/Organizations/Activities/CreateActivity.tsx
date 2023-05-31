/* eslint-disable prefer-const */
import { useNavigate } from "react-router-dom";
import ViewContainer from "../../../templates/ViewContainer";
import { BiCamera, BiLeftArrowAlt, BiSave } from "react-icons/bi";
import { ChangeEvent, FormEvent, useState } from "react";
import MediaPicker from "../../../components/MediaPicker";
import { createActivity } from "../../../business/Activities/Create";

export function CreateActivity() {
  const navigate = useNavigate();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [form, setForm] = useState({
    title: {
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
  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      title: {
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
    setIsSubmiting(true);
    await createActivity(formData);
    setIsSubmiting(false);
    setForm({
      title: {
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

    navigate("/activities/all");
  }

  return (
    <ViewContainer>
      <span
        className=" text-primary/60 flex items-center font-bold mt-3 ml-4 cursor-pointer hover:text-primary"
        onClick={() => navigate(-1)}
        title="voltar"
      >
        <BiLeftArrowAlt className="icon w-8 h-8" />
      </span>

      <form
        onSubmit={(e) => handleCreateActivity(e)}
        className="p-8 max-w-[730px] bg-white flex flex-col rounded-lg m-auto"
      >
        <h1 className="text-lg md:text-xl mb-2">Cadastro de Atividade</h1>
        <fieldset>
          <label htmlFor="title" className="flex-1 flex flex-col mb-6">
            Título:
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Nome da Atividade"
              className="input input-clean bg-gray-200"
              value={form.title.value}
              onChange={(event) => handleTitleChange(event)}
              data-testid="title"
            />
          </label>
          <label htmlFor="description" className="flex-1 flex flex-col mb-6">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição da atividade..."
              className="input input-clean h-20 bg-gray-200"
              value={form.description.value}
              onChange={(event) => handleDescriptionChange(event)}
              data-testid="description"
            />
          </label>
          <div className="flex flex-wrap gap-4">
            <label htmlFor="dateEvent" className="flex-1 flex flex-col mb-6">
              Data:
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
              Hora:
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
          <div className="flex items-center gap-9 h-[115px]">
            <label
              htmlFor="media"
              className={`flex cursor-pointer items-center gap-1.5 hover:text-primary`}
            >
              <BiCamera className={`icon`} />
              Anexar imagem
            </label>
            <MediaPicker />
          </div>
        </fieldset>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            data-testid="login-button"
            disabled={
              !form.title.value ||
              !form.description.value ||
              !form.dateEvent.value ||
              !form.hoursEvent.value ||
              isSubmiting
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
