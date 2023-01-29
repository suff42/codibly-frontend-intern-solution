export const buildAPIAddress = (currentPage: number, id: string = "") => {
  const API_END = "https://reqres.in/api/products?";
  const CURRENT_PAGE = `&page=${currentPage}`;
  const PER_PAGE = `&per_page=5`;
  const ID = id ? `&id=${id}` : "";

  return API_END + CURRENT_PAGE + PER_PAGE + ID;
};
