import React from "react";

const CategoryFilter = (props: any) => {
  const categories = [
    { value: "", label: "Todas" },
    { value: "Esporte", label: "Esporte" },
    { value: "Dança", label: "Dança" },
    { value: "Música", label: "Música" },
    { value: "Cinema", label: "Cinema" },
    { value: "Teatro", label: "Teatro" },
    { value: "Exposição Artistica", label: "Exposição" },
  ];

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => props.setCategoryFilter(category.value)}
          className={`rounded-full py-2 px-4 mr-2 mt-2 h-24 w-24 ${
            props.categoryFilter === category.value ? "bg-titlecolor text-orange-500 font-extrabold" : "bg-secondary text-primary"
          } hover:scale-105 hover:shadow-lg transform transition-all`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
