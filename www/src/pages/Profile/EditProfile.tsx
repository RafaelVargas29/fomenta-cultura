import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { BiCamera, BiLeftArrowAlt, BiSave } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { Address } from "../../model/Address";
import { User } from "../../model/Users";
import { AuthContext } from "../../store/context/AuthContext";
import ViewContainer from "../../templates/ViewContainer";
import Wrapper from "../../templates/Wrapper";

export function EditProfile() {
  const navigate = useNavigate();
  const { user, updateProfileUser, saveInStorageProfileImage } =
    useContextSelector(AuthContext, (context) => {
      return {
        updateProfileUser: context.updateProfileUser,
        saveInStorageProfileImage: context.saveProfileImage,
        user: context.user
      };
    });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [complement, setComplement] = useState("");
  const [address, setAddress] = useState<Address>({} as Address);
  const [preview, setPreview] = useState<string | null>(null);
  const types = ["image/jpeg", "image/svg", "image/jpg", "image/png"];

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBio(user.bio);
      setPreview(user.imageUrl);
      setAddress(user.address || ({} as Address));
      setCep(user.address?.cep || "");
      setNumber(user.address?.number || "");
      setComplement(user.address?.complement || "");
    }
  }, [user]);

  async function buscarDados() {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (result.status === 200) {
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

  async function onFileSelected(event: FormEvent<HTMLInputElement>) {
    const files = event.currentTarget.files?.[0];
    if (files && types.includes(files.type)) {
      const image = await saveInStorageProfileImage(files, user?.id);
      setPreview(image);
    } else {
      return;
    }
  }

  async function updateProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmiting(true);
    const data = new FormData(event.currentTarget);
    const obj = {
      id: user?.id,
      name: data.get("name"),
      email: user?.email,
      bio: data.get("bio"),
      imageUrl: preview || "",
      address: {
        cep: address.cep || "",
        logradouro: address.logradouro || "",
        bairro: address.bairro || "",
        localidade: address.localidade || "",
        uf: address.uf || "",
        number: data.get("number") || "SN",
        complement: data.get("complement") || "SN"
      }
    } as User;
    await updateProfileUser(obj, user?.id);
    setIsSubmiting(false);
  }

  return (
    <ViewContainer className="px-16 mt-8">
      <span
        className="text-primary/60 flex items-center font-bold mt-3 ml-4 cursor-pointer hover:text-primary"
        onClick={() => navigate(-1)}
        title="voltar"
      >
        <BiLeftArrowAlt className="icon w-8 h-8" />
      </span>
      <Wrapper className="bg-white shadow mt-6">
        <form
          onSubmit={(event) => updateProfile(event)}
          className="flex flex-wrap flex-col py-4"
        >
          <div className="flex flex-wrap xl:flex-nowrap">
            <fieldset className="mr-6">
              <label
                htmlFor="media"
                title="Alterar imagem de perfil"
                className="border-2 border-primary cursor-pointer flex-center overflow-hidden object-cover hover:bg-black/30 w-24 h-24 rounded-full"
              >
                <input
                  type="file"
                  id="media"
                  name="profile_image"
                  accept="image/*"
                  onChange={onFileSelected}
                  className={`h-0 w-0 invisible`}
                />
                {preview ? (
                  <img
                    src={preview}
                    alt=""
                    className={`w-24 h-24 overflow-hidden object-cover rounded`}
                  />
                ) : (
                  <BiCamera size={30} />
                )}
              </label>
            </fieldset>

            <fieldset className="w-full p-3 space-y-3">
              <legend className="text-xl font-semibold">Seus Dados</legend>

              <label htmlFor="name" className="flex-column gap-px">
                Nome:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="input input-clean"
                />
              </label>
              <label className="flex-column gap-px">
                Email:
                <input
                  type="text"
                  disabled
                  value={user?.email}
                  className="input input-clean"
                />
              </label>

              <label htmlFor="bio" className="flex-column gap-px">
                Bio:
                <textarea
                  name="bio"
                  id="bio"
                  spellCheck={false}
                  placeholder="Adicione um resumo."
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                  className="w-full resize-none placeholder:text-gray-400  p-4 border-0 bg-transparent text-lg leading-relaxed focus:ring-0"
                />
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
                  <input
                    disabled
                    className="input"
                    value={address?.logradouro}
                  />
                </label>
                <label htmlFor="number" className="flex-column gap-px">
                  Número:
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                    className="input input-clean"
                  />
                </label>
              </div>
              <label htmlFor="complement" className="flex-column gap-px">
                Complemento:
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                  className="input input-clean"
                />
              </label>
              <label htmlFor="bairro" className="flex-column gap-px">
                Bairro:
                <input disabled className="input" value={address?.bairro} />
              </label>
              <label htmlFor="localidade" className="flex-column gap-px">
                Localidade:
                <input disabled className="input" value={address?.localidade} />
              </label>
              <label htmlFor="uf" className="flex-column gap-px">
                UF:
                <input disabled className="input" value={address?.uf} />
              </label>
            </fieldset>
          </div>
          <div className="flex items-center justify-end p-4 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmiting}
            >
              <BiSave className="icon" /> Salvar
            </button>
          </div>
        </form>
      </Wrapper>
    </ViewContainer>
  );
}
