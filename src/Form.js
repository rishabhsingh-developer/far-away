import { useState } from "react";

export default function Form({ getItem }) {
  const [description, setDescription] = useState();
  const [number, setNumber] = useState(1);
  console.log(number);

  function handleClick(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, number, id: Date.now(), packed: false };

    getItem(newItem);
    setDescription("");
    setNumber(1);
  }
  return (
    <form action="" onSubmit={handleClick}>
      <p>What do you need for your 😀 treep ?</p>
      <div className="inpbtn">
        <select
          name=""
          id="select"
          className="sel"
          onChange={(e) => {
            console.log(e.target.value);
            setNumber(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="item...."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button>Add</button>
      </div>
    </form>
  );
}
