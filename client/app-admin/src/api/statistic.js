import axiosAPI from ".";

export const getTotalIncome = () => {
  return axiosAPI.get("/api/v1/statistics/getTotalIncome");
};

export const getQuantityBookedTicket = () => {
  return axiosAPI.get("/api/v1/statistics/getQuantityBookedTicket");
};

export const getQuantityBookedTicketByMaxCompany = () => {
  return axiosAPI.get("/api/v1/statistics/getQuantityBookedTicketByMaxCompany");
};

export const getQuantityTicketNotPayment = () => {
  return axiosAPI.get("/api/v1/statistics/getQuantityTicketNotPayment");
};

export const getQuantityTicketOfAllCompany = () => {
  return axiosAPI.get("/api/v1/statistics/getQuantityTicketOfAllCompany");
};