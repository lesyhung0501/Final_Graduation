import axiosAPI from ".";

export const getAllTicketByAdmin = () => {
  return axiosAPI.get("/api/v1/tickets/getAllTicketByAdmin");
};

export const uppdateTicketAPI = (ticketId) => {
  let token = null;
  if(JSON.parse(localStorage.getItem("userLogin"))) {
    token = JSON.parse(localStorage.getItem("userLogin")).token;
  }
  return axiosAPI.put(`/api/v1/tickets/${ticketId}`, {}, {
    headers: {
      token,
    },
  });
};

export const removeTicketAPI = (ticketId) => {
  return axiosAPI.delete(`/api/v1/tickets/${ticketId}`);
};
