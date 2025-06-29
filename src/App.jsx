import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import { useState } from "react";
const urunler = [
  { id: 1, name: "Elma", completed: true },
  { id: 2, name: "Armut", completed: false },
  { id: 3, name: "Muz", completed: true },
  { id: 4, name: "Çilek", completed: false },
  { id: 5, name: "Kivi", completed: true },
  { id: 6, name: "Portakal", completed: false },
];

export default function App() {
  const [items, setItems] = useState(urunler);
  const [filterButton, setFilterButton] = useState("all");
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    setFilterButton("all");
    setName("");
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id != id));
  }
  function handleUpdateItem(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
    setItems(updatedItems);
  }
  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      {items.length > 0 && (
        <FilterButtons
          filterButton={filterButton}
          setFilterButton={setFilterButton}
          onClearItems={handleClearItems}
        />
      )}

      <ListItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        filterButton={filterButton}
      />
    </div>
  );
}
