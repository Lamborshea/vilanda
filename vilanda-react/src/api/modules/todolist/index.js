import Http from "../../../utils/Http";
import * as Code from "./../../Code";
import Url from "../../url";

async function getData() {
  try {
    const response = await Http.post(Url.todolist.getTodo);
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
}

async function addData(title = "") {
  try {
    const response = await Http.post(Url.todolist.addTodo, {
      title
    });
    const result = response;
    if (result.code === Code.SUCCESS) {
      return result.data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

async function updateData(_id = "", checked = false) {
  try {
    const response = await Http.post(Url.todolist.updateTodo, {
      _id,
      checked
    });
    const result = response;
    if (result.code === Code.SUCCESS) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

async function deleteData(_id = "") {
  try {
    const response = await Http.post(Url.todolist.deleteTodo, {
      _id
    });
    const result = response;
    if (result.code === Code.SUCCESS) {
      return result.data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export default {
  getData,
  addData,
  updateData,
  deleteData
};
