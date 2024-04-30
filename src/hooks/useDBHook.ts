import baseApi from "@/other/baseApi";

function useDBHook() {
  const getAllTickets = async () => {
    try {
      //   const res = await baseApi.get("/asfdsd", { withCredentials: true });

      return { data: [1, 2] };
    } catch (error) {
      console.log("error: getAllTickets");
      return { error: error };
    }
  };

  return { getAllTickets: getAllTickets };
}

export default useDBHook;
