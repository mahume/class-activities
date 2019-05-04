import React from "react";

function List({ groceries }) {  
  const unpurchasedList = groceries.filter(grocery => !grocery.purchased)

  return (
    <ul className="list-group">
      {unpurchasedList.map(item => <li className="list-group-item" key={item.id}>{item.name}</li>)}
    </ul>
  );
}

export default List;
