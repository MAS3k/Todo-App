import React, { useState } from "react";
import Todolist from "./components/TaskList";
import Header from "./components/Header";
import { CompletedTask } from "./components/completedTask/completedTask";
import { InputTask } from "./inputTask/InputTask";

function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const handleItemChange = (event) => setItem(event.target.value);
  const AddOrUpdate = () => {
    if (editMode) {
      const updatedList = [...newItem];
      updatedList[editIndex] = item;
      setNewItem(updatedList);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setNewItem([...newItem, item]);
    }
    setItem("");
  };

  const Editt = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setItem(newItem[index]);
  };

  const handleDelete = (index) => {
    const updatedList = [...newItem];
    updatedList.splice(index, 1);
    setNewItem(updatedList);
  };

  const handleComplete = (index) => {
    setCompletedItems([...completedItems, newItem[index]]);
    handleDelete(index);
  };

  const Replace = (index) => {
    const itemToReplace = completedItems[index];
    setCompletedItems(completedItems.filter((_, i) => i !== index));
    setNewItem([...newItem, itemToReplace]);
  };

  return (
    <>
      <Header />
      <InputTask
        item={item}
        handleItemChange={handleItemChange}
        AddOrUpdate={AddOrUpdate}
        editMode={editMode}
      />
      <Todolist
        Editt={Editt}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        newItem={newItem}
      />
      <CompletedTask completedItems={completedItems} Replace={Replace} />
    </>
  );
}

export default App;
