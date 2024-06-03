import React, { useState } from "react";
import "./App.css"

const App = () => {

const[todo , setTodo] = useState("");
const [todos , setTodos]  = useState([]);
const [editId , setEditId] = useState(0);
const [check , setCheck] = useState([]);
const handleSubmit = (e) => {
   e.preventDefault();
   if(editId) {
    const editTodo = todos.find((i) => i.id === editId);
    const updateTodos = todos.map((t) => t.id === editTodo.id ? (
      t={id :t.id , todo }):
      {id : t.id , todo : t.todo}
      );
      setTodos(updateTodos);
      setEditId(0);
      setTodo("");
      return;
   }
  if(todo !== ''){
    setTodos([{id:`${todo}-${Date.now()}` , todo} , ...todos])
    setTodo("")
  }
}
console.log(todos)
const handleDelete = ((id) => {
  const delTodo = todos.filter((to) => to.id !== id);
  setTodos([...delTodo]);
});

const handleEdit = (id) => {
 const editTodo = todos.find((i) => i.id === id);
 setTodo(editTodo.todo);
 setEditId(id)
 
};

const handleCheckBox = (id) => {
  setCheck((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
  

}
  return(
   
    <div className="App">
    <div className="container">
      <h1>to-do list App</h1>
      <form className="todoform" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit">{editId ? "Edit" : "Go"}</button>
      </form>
      <ul className="allTodos">
        {
          todos.map((t) => (
            <li className="singleTodo">
               <input type="checkbox" className="todoCheckbox" checked={!!check[t.id]} onChange={() => handleCheckBox(t.id)}/>
              <span className="todoText" style={{textDecoration:check[t.id]?'line-through' : 'none'}} key={t.id}>{t.todo}</span>
            <button onClick={() => handleEdit(t.id)}>edit</button>
            <button onClick={() => handleDelete(t.id) }>delete</button>
            </li>
          ))
        }
       
        
      </ul>
    </div>
    </div>
    ) 
};

export default App;