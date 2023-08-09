import axiosAPI from ".";

export const getTripListByDataseachAPI = (dataSearch) => {
  const { fromStation, toStation, dateSearch} = dataSearch;
  return axiosAPI.get(`/api/v1/trips/getAllTripByDataSearch?from=${fromStation}&to=${toStation}&dateSearch=${dateSearch}`);
};

export const getTripListByDataseachOrderPriceAPI = (dataSearch) => {
  const { fromStation, toStation, dateSearch} = dataSearch;
  return axiosAPI.get(`/api/v1/trips/getAllTripOrderPriceByDataSearch?from=${fromStation}&to=${toStation}&dateSearch=${dateSearch}`);
};

export const getTripListByDataseachOrderPriceDescAPI = (dataSearch) => {
  const { fromStation, toStation, dateSearch} = dataSearch;
  return axiosAPI.get(`/api/v1/trips/getAllTripOrderPriceDescByDataSearch?from=${fromStation}&to=${toStation}&dateSearch=${dateSearch}`);
};

export const getTripListAroundByDataseachAPI = (dataSearch) => {
  const { fromStation, toStation, dateSearchRound} = dataSearch;
  return axiosAPI.get(`/api/v1/trips/getAllTripByDataSearch?from=${toStation}&to=${fromStation}&dateSearch=${dateSearchRound}`);
};

export const getTripListAroundByDataseachOrderPriceAPI = (dataSearch) => {
  const { fromStation, toStation, dateSearchRound} = dataSearch;
  return axiosAPI.get(`/api/v1/trips/getAllTripOrderPriceByDataSearch?from=${toStation}&to=${fromStation}&dateSearch=${dateSearchRound}`);
};

export const getTripListAroundByDataseachOrderPriceDescAPI = (dataSearch) => {
  const { fromStation, toStation, dateSearchRound} = dataSearch;
  return axiosAPI.get(`/api/v1/trips/getAllTripOrderPriceDescByDataSearch?from=${toStation}&to=${fromStation}&dateSearch=${dateSearchRound}`);
};


export const getTripDetailAPI = (tripId) => {
  console.log(tripId);
  return axiosAPI.get(`/api/v1/trips/getTripDetailByTripId?tripId=${tripId}`);
};

