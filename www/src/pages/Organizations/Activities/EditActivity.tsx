/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from "react";
import { BiCamera, BiLeftArrowAlt, BiSave } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import MediaPicker from "../../../components/MediaPicker";
import { ActivitiesContext } from "../../../store/context/ActivitiesContext";
import ViewContainer from "../../../templates/ViewContainer";

export function EditActivity() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [hoursEvent, setHoursEvent] = useState("");
  const [status, setStatus] = useState("");
  const [imageURL, setImageURL] = useState<string | undefined>("");
  const [hasImageURL, setHasImageURL] = useState<boolean>(false);

  const { getById, update } = useContextSelector(
    ActivitiesContext,
    (context) => {
      return {
        getById: context.getById,
        update: context.update
      };
    }
  );

  async function validateImageExist(param: boolean) {
    setHasImageURL(param);
  }
  async function handleEditActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmiting(true);
    if (await update(id!, hasImageURL, new FormData(event.currentTarget))) {
      setIsSubmiting(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const selectedActivity = await getById(id);
      setTitle(selectedActivity.title);
      setCategory(selectedActivity.category);
      setDescription(selectedActivity.description);
      setDateEvent(selectedActivity.dateEvent);
      setHoursEvent(selectedActivity.hoursEvent);
      setStatus(selectedActivity.status);
      setImageURL(selectedActivity.image);
    }
    fetchData();
  }, [getById, id]);

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
        onSubmit={(e) => handleEditActivity(e)}
        className="p-8 max-w-[730px] bg-white flex flex-col rounded-lg m-auto"
      >
        <h1 className="text-lg md:text-xl mb-2">Editar Atividade</h1>
        <fieldset>
          <div className="flex items-center gap-9 h-[115px]">
            <label
              htmlFor="media"
              className={`flex cursor-pointer items-center gap-1.5 hover:text-primary`}
            >
              <BiCamera className={`icon`} />
              Anexar imagem
            </label>
            <MediaPicker imageURL={imageURL} action={validateImageExist} />
          </div>
          <label htmlFor="title" className="flex-1 flex flex-col mb-6">
            Título:
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Nome da Atividade"
              className="input input-clean"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="title"
            />
          </label>
          <label htmlFor="category" className="flex-1 flex flex-col mb-6">
            Categoria:
            <select
              name="category"
              id="category"
              className="input input-clean bg-gray-200"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              data-testid="category"
            >
              <option value="Esporte">Esporte</option>
              <option value="Dança">Dança</option>
              <option value="Música">Música</option>
              <option value="Cinema">Cinema</option>
              <option value="Teatro">Teatro</option>
              <option value="Exposição Artistica">Exposição</option>
            </select>
          </label>
          <label htmlFor="description" className="flex-1 flex flex-col mb-6">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição da atividade..."
              className="input input-clean"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                className="input input-clean"
                value={dateEvent}
                onChange={(event) => setDateEvent(event.target.value)}
                data-testid="dateEvent"
              />
            </label>
            <label htmlFor="hoursEvent" className="flex-1 flex flex-col mb-6">
              Hora:
              <input
                type="time"
                name="hoursEvent"
                id="hoursEvent"
                className="input input-clean"
                value={hoursEvent}
                onChange={(event) => setHoursEvent(event.target.value)}
                data-testid="hoursEvent"
              />
            </label>
          </div>
          <label htmlFor="status" className="flex-1 flex flex-col mb-6">
            Status:
            <select
              name="status"
              id="status"
              className="input input-clean"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value={status}>{status}</option>
              <option value="confirmado">Confirmar</option>
              <option value="cancelado">Cancelar</option>
            </select>
          </label>
        </fieldset>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            data-testid="login-button"
            disabled={isSubmiting}
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
