import axiosAPI from ".";

export const getAllTicketByTripId = (tripId) => {
  return axiosAPI.get(`api/v1/tickets/getAllTicketByTripId?tripId=${tripId}`);
};

export const getAllTicketNotSoldByTripId = (tripId) => {
  return axiosAPI.get(`api/v1/tickets/getAllTicketNotSoldByTripId?tripId=${tripId}`);
};

export const getTicketListByUserIdAPI = (userId) => {
  return axiosAPI.get(`/api/v1/tickets/getTicketListByUserId?userId=${userId}`);
};

export const bookingTripAPI = (data) => {
  
  let token = null;
  if(JSON.parse(localStorage.getItem("userLogin"))) {
    token = JSON.parse(localStorage.getItem("userLogin")).token;
  }
  console.log("api")
  console.log(data)
  return axiosAPI.post("/api/v1/tickets", data, {
    headers: {
      token,
    },
  });
};

export const cancelTicketAPI = (ticketId) => {
  return axiosAPI.delete(`/api/v1/tickets/${ticketId}`);
};