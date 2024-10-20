import { login_script } from "../Const/UrlConfig";

export const loginUser = async (username: string, password: string) => {
    try {
      const response = await fetch(`${login_script}?username=${username}&password=${password}`);
      const data = await response.json();
      
      // Retorna los datos para ser usados en el componente
      return data;
      
    } catch (error) {
      console.error("Error during login fetch", error);
      throw error;  // Lanza el error para manejarlo en el componente
    }
  };