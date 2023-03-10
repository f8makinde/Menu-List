import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items)
 
  return (
      <main>
         <section>
          <div className='title'>
             <h1>Our Menu</h1>
             <div className='underline'></div>
          </div>
         <Menu items={menu}/>
            </section>
      </main>
    );
}

export default App;
