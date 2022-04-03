import axios from "../api/axios";
import useContextAPI from "./useContextAPI";

const useLogout = () => {
  const { setAuth } = useContextAPI();

  const logout = async () => {
    setAuth({});
    try {
      axios.get("/api/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};

export default useLogout;
