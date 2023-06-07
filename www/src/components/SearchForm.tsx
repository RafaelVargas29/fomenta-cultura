import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiSearch } from "react-icons/bi";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../store/context/ActivitiesContext";

const searchFormSchema = z.object({
  query: z.string()
});
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });
  const search = useContextSelector(ActivitiesContext, (context) => {
    return context.search;
  });

  async function handleSearch(data: SearchFormInputs) {
    console.log("search form valor de query", data);
    const result = search(data.query);

    console.log("search form valor de result", result);
  }

  return (
    <form className="w-full flex gap-4" onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        className="input input-clean"
        placeholder="Busque por atividades"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting} className={`btn bg-hover`}>
        <BiSearch className="icon" />
        Buscar
      </button>
    </form>
  );
}
