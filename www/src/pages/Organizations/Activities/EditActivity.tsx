/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import { getByIdActivities } from "../../../business/Activities/GetById";
import { Activity } from "../../../models/Activity";
import ViewContainer from "../../../templates/ViewContainer";
import { BiLeftArrowAlt, BiSave } from "react-icons/bi";
import { updateActivity } from "../../../business/Activities/Update";

export function EditActivity() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [hoursEvent, setHoursEvent] = useState("");
  const [imageURL, setImageURL] = useState<string | undefined>("");

  async function handleEditActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsSubmiting(true);
    const inf = {
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
      dateEvent,
      hoursEvent,
      image: imageURL
    } as Activity;
    await updateActivity(id, inf);
    setIsSubmiting(false);
    navigate("/activities/all");
  }

  useEffect(() => {
    async function buscarDados() {
      const result: Activity = await getByIdActivities(id);
      setTitle(result.title);
      setDescription(result.description);
      setDateEvent(result.dateEvent);
      setHoursEvent(result.hoursEvent);
      setImageURL(result.image);
    }
    buscarDados();
  }, []);

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
          <label htmlFor="title" className="flex-1 flex flex-col mb-6">
            Título:
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Nome da Atividade"
              className="input input-clean disabled:text-gray-400 disabled:cursor-not-allowed"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              className="input input-clean h-20 disabled:text-gray-400 disabled:cursor-not-allowed"
              value={description}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="description"
            />
          </label>
          {/* <div className="flex flex-wrap gap-4">
            <label htmlFor="dateEvent" className="flex-1 flex flex-col mb-6">
              Data:
              <input
                type="date"
                name="dateEvent"
                id="dateEvent"
                className="input input-clean disabled:text-gray-400 disabled:cursor-not-allowed"
                // value={form.dateEvent.value}
                // onChange={(event) => handleDateEventChange(event)}
                data-testid="dateEvent"
                disabled
              />
            </label>
            <label htmlFor="hoursEvent" className="flex-1 flex flex-col mb-6">
              Hora:
              <input
                type="text"
                name="hoursEvent"
                id="hoursEvent"
                placeholder="00:00"
                className="input input-clean disabled:text-gray-400 disabled:cursor-not-allowed"
                // value={form.hoursEvent.value}
                // onChange={(event) => handleHoursEventChange(event)}
                data-testid="hoursEvent"
              />
            </label>
          </div> */}
          <label htmlFor="status" className="flex-1 flex flex-col mb-6">
            Status:
            <select name="status" id="status" className="input input-clean">
              <option selected disabled>
                Agendado
              </option>
              <option value="confirmado">Confirmar</option>
              <option value="cancelado">Cancelar</option>
            </select>
          </label>
          {/* <div className="flex items-center gap-9 h-[115px]">
            <label
              htmlFor="media"
              className={`flex cursor-pointer items-center gap-1.5 hover:text-primary`}
            >
              <BiCamera className={`icon`} />
              Anexar imagem
            </label>
            <MediaPicker />
          </div> */}
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
