const todoList = require("../todo");

const { add, markAsComplete, overdue, dueToday, dueLater } = todoList();
var d = new Date();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
describe("TodoList Test Suite", () => {
  test("Should add new todo", () => {
    add({
      title: "Submit assignment",
      dueDate: yesterday,
      completed: false,
    });
    add({ title: "Pay rent", dueDate: today, completed: true });
    add({ title: "Service Vehicle", dueDate: today, completed: false });
    add({ title: "File taxes", dueDate: tomorrow, completed: false });
    add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
    expect(all.length).toBe(5);
  });

  test("Should mark as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("retrive the overdue data", () => {
    expect(overdue().length).toBe(1);
  });
  test("retrive the dueToday data", () => {
    expect(dueToday().length).toBe(2);
  });
  test("retrive the dueLater data", () => {
    expect(dueLater().length).toBe(2);
  });
});
