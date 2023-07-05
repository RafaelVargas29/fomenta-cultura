import { AiOutlineEdit } from "react-icons/ai";
import { useContextSelector } from "use-context-selector";
import { Avatar } from "../../components/Avatar";
import { AuthContext } from "../../store/context/AuthContext";
import ViewContainer from "../../templates/ViewContainer";

export function Profile() {
  const { prof } = useContextSelector(AuthContext, (context) => {
    return {
      prof: context.user
    };
  });
  return (
    <ViewContainer className="px-16 mt-8">
      <div className="bg-white shadow rounded-xl p-8 md:p-0 md:flex flex-wrap">
        <div className=" p-7 gap-3 flex-center flex-col">
          <figure className="rounded-lg overflow-hidden">
            <Avatar
              height={150}
              width={150}
              url={prof.imageUrl}
              alt={prof.name}
            />
          </figure>
          <strong>{prof.name}</strong>
          <a
            href={`/profile/edit/${prof.id}`}
            className="border-2 border-primary rounded-lg p-2 mt-3"
            title="editar perfil"
          >
            <AiOutlineEdit size={30} />
          </a>
        </div>

        <div className="border-l-2 pt-6 md:p-8 text-center md:text-left space-y-4 flex-1">
          <p className="text-lg font-medium text-center">Informações</p>
          <section className="space-x-3 pt-3 border-t">
            <strong>E-mail</strong>:<span>{prof.email}</span>
          </section>
          <section className="space-x-3 pt-3 border-t">
            <strong>Bio</strong>:<span>{prof.bio}</span>
          </section>
        </div>
        <div className="border-l-2 pt-6 md:p-8 text-center md:text-left space-y-4 flex-1">
          <p className="text-lg font-medium text-center">Endereço</p>

          {prof.address?.cep ? (
            <>
              <section className="space-x-3 pt-3 border-t">
                <strong>cep</strong>: <span>{prof.address?.cep}</span>
                <strong>logradouro</strong>:{" "}
                <span>{prof.address?.logradouro}</span>
              </section>
              <section className="space-x-3 pt-3 border-t">
                <strong>número</strong>: <span>{prof.address?.number}</span>
                <strong>complemento</strong>:{" "}
                <span>{prof.address?.complement}</span>
              </section>
              <section className="space-x-3 pt-3 border-t">
                <strong>bairro</strong>: <span>{prof.address?.bairro}</span>
              </section>
              <section className="space-x-3 pt-3 border-t">
                <strong>localidade</strong>:
                <span>{prof.address?.localidade}</span>
                <strong>uf</strong>:<span>{prof.address?.uf}</span>
              </section>
            </>
          ) : (
            <p className="text-center mt-4">
              Você ainda não cadastrou seu endereço
            </p>
          )}
        </div>
      </div>
    </ViewContainer>
  );
}
