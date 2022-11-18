const todoList = () => {
  let list1 = [];
  const add = (todoItem) => {
    list1.push(todoItem);
  };
  const markAsComplete = (index) => {
    list1[index].completed = true;
  };

  const overdue = () => {
    return list1.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return list1.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return list1.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { list1, add, markAsComplete, overdue, dueToday, dueLater };
};

module.exports = todoList;
