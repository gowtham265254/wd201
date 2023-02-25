const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const over_d = all.filter(
      (item) => item.dueDate.split("-")[2] < new Date().getDate()
    );
    return over_d;
  };

  const dueToday = () => {
    const due_t = all.filter(
      (item) => item.dueDate.split("-")[2] === String(new Date().getDate())
    );
    return due_t;
  };

  const dueLater = () => {
    const Due_l = all.filter(
      (item) => item.dueDate.split("-")[2] > new Date().getDate()
    );
    return Due_l;
  };

  const toDisplayableList = (list) => {
    const return_value = list.map(
      (item) =>
        `${item.completed ? "[x]" : "[ ]"} ${item.title} ${
          item.dueDate.split("-")[2] === String(new Date().getDate())
            ? ""
            : item.dueDate
        }`
    );

    return return_value.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
