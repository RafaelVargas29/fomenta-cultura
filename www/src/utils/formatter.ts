export const forma = (date: string) => {
  const dt = date.split("-");
  return `${dt[2]}/${dt[1]}/${dt[0]}`;
};
