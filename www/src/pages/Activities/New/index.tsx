import { Link } from "react-router-dom";
import ViewContainer from "../../../layouts/ViewContainer";
import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";
import { BiCamera } from "react-icons/bi";
import MediaPicker from "../../../components/MediaPicker";
export function NewActivity() {
  return (
    <ViewContainer>
      <div id="page-form-contianer">
        <header>
          <Link to="/dashboard">
            <FiArrowLeft size={24} />
          </Link>
        </header>
        <form action="">
          <h1>Cadastro de Atividade</h1>
          <fieldset>
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="description">Descrição</label>
              <input type="text" name="description" id="description" />
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="date">Data</label>
                <input type="date" name="date" id="date" />
              </div>
              <div className="field">
                <label htmlFor="horario">Horário</label>
                <input type="text" name="horario" id="horario" />
              </div>
            </div>

            <div className="flex items-center gap-9 h-[115px] justify-between">
              <label
                htmlFor="media"
                className={`flex cursor-pointer items-center gap-1.5 hover:text-primary`}
              >
                <BiCamera className={`icon`} />
                Anexar folder
              </label>
              <MediaPicker />
            </div>
          </fieldset>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </ViewContainer>
  );
}
