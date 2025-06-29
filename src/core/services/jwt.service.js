import store from "@/core/services/store";

const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  // console.log("GET_TOKEN ", localStorage.getItem(ID_TOKEN_KEY));
  // store.commit("updateToken");
  return localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  localStorage.setItem(ID_TOKEN_KEY, token);
  store.commit("auth/UPDATE_TOKEN");
};

export const destroyToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY);
};


export default { getToken, saveToken, destroyToken };
