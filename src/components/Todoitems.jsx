import Todoitem from "./Todoitem"
const TodoItems = ({ todoItems }) => {
  return (
    <div classNmae="items-container">
      {todoItems.map(item =><Todoitem todate={item.dueDate} todoName={item.name}></Todoitem>)}
    </div>
  );
};
export default TodoItems 