const Page = require("./page");

class ToDoPage extends Page {
  get container() {
    return $(".todoapp");
  }

  get toDoInput() {
    return $(".new-todo");
  }

  get toDoCheck() {
    return $("input.toggle");
  }

  get toDoInput() {
    return $(".new-todo");
  }

  get itemsList() {
    return $(".todo-list li");
  }

  get toDosLeft() {
    return $(".todo-count");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async addNewToDo(text) {
    await this.toDoInput.setValue(text);
    // await this.toDoInput.
  }

  openVersionWithChanges() {
    return super.open("index-with-changes");
  }
}

module.exports = new ToDoPage();
