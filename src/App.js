import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allItems = ['all', ...new Set(items.map((item) => item.category))]
console.log(allItems)
function App() {
  const [menu, setMenu] = useState(items)
  const [category, setCategory] = useState(allItems)
  const filterItems = (category) => {
   if(category === 'all'){
      return setMenu(items)
   }
   const newItems = items.filter((item) => item.category === category)
  return setMenu(newItems)
  }
  return (
      <main>
          <section className="menu section">
          <div className='title'>
             <h1>Our Menu</h1>
             <div className='underline'></div>
          </div>
          <Categories category={category} filterItems={filterItems}/>
         <Menu items={menu}/>
            </section>
      </main>
    );
}

export default App;
