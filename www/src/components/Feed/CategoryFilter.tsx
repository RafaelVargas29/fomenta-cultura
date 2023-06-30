const CategoryFilter = (props: any) => {
    const categories = [
      { value: "", label: "Todas" },
      { value: "Esporte", label: "Esporte" },
      { value: "Dança", label: "Dança" },
      { value: "Música", label: "Música" },
      { value: "Cinema", label: "Cinema" },
      { value: "Teatro", label: "Teatro" },
      { value: "Exposição Artistica", label: "Exposição Artistica" },
    ];
  
    return (
      <div>
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => props.setCategoryFilter(category.value)}
            className={`category-button ${
              props.categoryFilter === category.value ? "active" : ""
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;
  