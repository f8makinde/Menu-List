import React from 'react';

const Menu = ({items}) => {
  return (
      <div>
         {
          items.map((item) => {
            const {id, title, price, img, desc} = item
            return <article key={id}>
                <img src={img} alt={title} className='photo'/>
                <h4>{title}</h4>
                <h4>{price}</h4>
                <div>
                <h4 className='item-text'>{desc}</h4>
                </div>
                
            </article>
          })
         }
      </div>
  )    
       
};

export default Menu;
