import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
function App() {
  const [items, setItems] = useState([{
    id: 1,
    checked: false,
    item: "Ona half pound bag of Coca Covered Almonds Unsalted"
  },
  {
    id: 2,
    checked: false,
    item: "Item 2"
  },
  {
    id: 3,
    checked: false,
    item: "Item 3"
  }
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const itemLists = items.filter((item) => item.id !== id);
    setItems(itemLists);
    localStorage.setItem('shoppingList', JSON.stringify(itemLists));
  }
  return (
    <div className="App">
      <Header title="Groceries" />
      <Content 
      items = {items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;
