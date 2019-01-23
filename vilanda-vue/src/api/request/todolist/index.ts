import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
async function addData(title: string) {
  try {
    const response = await Http.post(Url.todolist.addTodo, {
      title
    });
    const result = response.data;
    if (result.code === Code.SUCCESS) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

async function updateData(_id: string, checked: boolean) {
  try {
    const response = await Http.post(Url.todolist.updateTodo, {
      _id,
      checked
    });
    const result = response.data;
    if (result.code === Code.SUCCESS) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

async function deleteData(_id: string) {
  try {
    const response = await Http.post(Url.todolist.deleteTodo, {
      _id
    });
    const result = response.data;
    if (result.code === Code.SUCCESS) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export default {
  addData,
  updateData,
  deleteData
};
