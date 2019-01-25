import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";

async function login(username: string, password: string) {
  try {
    const response = await Http.post(Url.login.login, {
      username,
      password
    });
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
}

async function register(username: string, password: string) {
  try {
    const response = await Http.post(Url.login.register, {
      username,
      password
    });
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
}

export default {
  login,
  register
};
