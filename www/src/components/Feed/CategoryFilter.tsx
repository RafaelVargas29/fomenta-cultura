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
    <div className="flex-row justify-center items-center w-full">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => props.setCategoryFilter(category.value)}
          className={`flex-row flex-shrink-0 flex-1 justify-center items-center rounded-full py-2 px-4 mr-5 mt-2 h-32 w-32 ${
            props.categoryFilter === category.value ? "bg-titlecolor text-white font-extrabold" : "bg-secondary text-white"
          } hover:scale-105 hover:shadow-lg transform transition-all`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
