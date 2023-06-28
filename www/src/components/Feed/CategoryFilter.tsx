const CategoryFilter = (props: any) => {
    return (
        <div>
            <select value={props.categoryFilter} onChange={(e) => props.setCategoryFilter(e.target.value)}>
              <option value="">Todas</option>
              <option value="Esporte">Esporte</option>
              <option value="Dança">Dança</option>
              <option value="Música">Música</option>
              <option value="Cinema">Cinema</option>
              <option value="Teatro">Teatro</option>
              <option value="Exposição Artistica">Exposição Artistica</option>
            </select>
        </div>
    )
}

export default CategoryFilter;