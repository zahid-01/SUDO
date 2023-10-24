import axios from "axios";
import API_BASE_URL from "../../config/api";

export const getLogInInfo = async () => {
  let loginResponse;
  await axios({
    method: "GET",
    url: `${API_BASE_URL}/api/v1/isLoggedIn`,
    withCredentials: true,
  })
    .then((res) => {
      loginResponse = res;
    })
    .catch((e) => console.log(e));

  return loginResponse;
};
