/* eslint-disable prefer-const */
import { ChangeEvent, FormEvent, useState } from "react";
import { BiCamera, BiLeftArrowAlt, BiSave } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import MediaPicker from "../../../components/MediaPicker";
import { ActivitiesContext } from "../../../store/context/ActivitiesContext";
import { AuthContext } from "../../../store/context/AuthContext";
import ViewContainer from "../../../templates/ViewContainer";

export function CreateActivity() {
  const prof = useContextSelector(AuthContext, (context) => context.user);

  const navigate = useNavigate();
  const { create } = useContextSelector(ActivitiesContext, (context) => {
    return { create: context.create };
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [form, setForm] = useState({
    title: {
      hasChanged: false,
      value: ""
    },
    category: {
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
  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setForm({
      ...form,
      category: {
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
    setIsSubmiting(true);
    await create(new FormData(event.currentTarget));
    setIsSubmiting(false);
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
      {prof.address?.cep ? (
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
            <label htmlFor="category" className="flex-1 flex flex-col mb-6">
              Categoria:
              <select
                name="category"
                id="category"
                className="input input-clean bg-gray-200"
                onChange={handleCategoryChange}
              >
                <option value="Esporte">Esporte</option>
                <option value="Dança">Dança</option>
                <option value="Música">Música</option>
                <option value="Cinema">Cinema</option>
                <option value="Teatro">Teatro</option>
                <option value="Exposição Artistica">Exposição Artistica</option>
              </select>
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
                  type="time"
                  name="hoursEvent"
                  id="hoursEvent"
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
                Adicionar um flyer
              </label>
              <MediaPicker action={() => {}} />
            </div>
          </fieldset>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              data-testid="login-button"
              disabled={
                !form.title.value ||
                !form.category.value ||
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
      ) : (
        <>
          <p className="text-center mt-4">
            Você ainda não cadastrou seu endereço,
            <a href={`/profile/edit/${prof.id}`} className="underline">
              cadastre aqui
            </a>
          </p>
        </>
      )}
    </ViewContainer>
  );
}
