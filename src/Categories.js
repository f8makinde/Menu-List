import React from 'react';

const Categories = ({category, filterItems}) => {
  return (
    <div className='btn-container'>
        {
          category.map((categories, index) => {
            return(
                 <button className='filter-btn' key={index} onClick={() => filterItems(categories)}>{categories}</button>
            )
          
          })
        }
    </div>
  )

  
 
};

export default Categories;
