const SearchForm = (props: any) => {
  return (
    <input
      type="text"
      className="input input-clean"
      placeholder="Busque por atividades"
      value={props.search}
      onChange={(e) => props.setSearch(e.target.value)}
    />
  );
};

export default SearchForm;
