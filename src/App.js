import { useEffect, useState } from 'react';
import './App.css';
import Categories from './Categories';
import Menu from './Menu';




function App() {

  const [menuItems , setMenuItems] = useState([]);

  useEffect(()=>{
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  },[])

  const allCategories = ['all' , ...new Set(menuItems.map((item)=> item.category))]

  const filterItems =( category )=>{
    if(category === 'all'){
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setMenuItems(data));
      // setMenuItems(menuItems);
      return;
    }
    const newItem = menuItems.filter(item => item.category === category);
    setMenuItems(newItem)
  }

  // console.log(allCategories);

  return (
    <div className="menu section">
      <div className="title">
        <h2>our menu {menuItems.length}</h2>
        <div className="underline"></div>
      </div>
      {
        allCategories.map(categories => <Categories categories={categories} filterItems={filterItems}></Categories>)
      }
      {/* <Categories allCategories={allCategories} filterItems={filterItems}></Categories> */}
      {menuItems.map((menuItem)=><Menu menuItem={menuItem}></Menu>)}
    </div>
  );
}

export default App;
