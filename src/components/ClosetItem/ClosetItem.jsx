import React from "react";

const ClosetItem = ({ item }) => {
  return (
    <div className="closet-item">
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default ClosetItem;
