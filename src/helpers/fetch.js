export const apiFetch = async (param, state, setState) => {
  //Busqueda de ciudades
  setState({ data: [], loader: true });
  const request = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${param}&key=${process.env.REACT_APP_OPENCAGEDATA}&limit=4`
  );
  const result = await request.json();
  if (request.status === 200) {
    setState({ loader: false, data: result.results });
  } else {
    setState({ ...state, loader: true });
    console.log(result);
  }
};
