import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success mb-2" onClick={addElement}>Add Element</button>
      <div className="list-group">
        {array.map((item, index) => (
          <div 
          key={index} 
          className="list-group-item d-flex justify-content-between align-items-center border"
          style={{ 
            height: "50px",       
            minWidth: "200px", 
            padding: "5px 7px",
            borderWidth: "1px"
          }}
        >
            <span className="fw-bold">{item}</span>
            <button className="btn btn-danger" onClick={() => deleteElement(index)}
                    id="wd-delete-element-click">
              Delete</button>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
}
