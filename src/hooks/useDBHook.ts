import API from "@/other/baseApi";

function useDBHook() {
  async function getAllTickets() {
    try {
      const res = await API.get("/ticket/getAllTickets", {
        withCredentials: true,
      });

      return { data: res.data };
    } catch (error) {
      console.log("error: getAllTickets");
      return { error: error };
    }
  }

  async function addTicket(
    ticketId: any,
    destination: any,
    flightNumber: any,
    name: any,
    departureDate: any
  ) {
    try {
      // const data = {
      //   ticketId: '123',
      //   destination: 'New York',
      //   flightNumber: 'ABC123',
      //   name: 'John Doe',
      //   departureDate: '2024-05-01',
      // }
      const data = {
        ticketId: ticketId,
        destination: destination,
        flightNumber: flightNumber,
        name: name,
        departureDate: departureDate,
      };

      const res = await API.post("/ticket/addTicket", data, {
        withCredentials: true,
      });
      // console.log(res)
      return { data: res.data };
    } catch (error) {
      console.log("error: getAllTickets");
      return { error: error };
    }
  }

  async function deleteTicket(ticketId: any) {
    try {
      const res = await API.delete(
        `/ticket/deleteTicket?ticketId=${ticketId}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return { data: res.data };
    } catch (error) {
      console.log("error: getAllTickets");
      return { error: error };
    }
  }

  return {
    getAllTickets: getAllTickets,
    addTicket: addTicket,
    deleteTicket: deleteTicket,
  };
}

export default useDBHook;
