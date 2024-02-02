import { useState } from "react";
import Item from "./Item";
export default function PackingList({ ite, Delete, update, setItem }) {
  const [sort, setSort] = useState("input");
  let sortNum;
  if (sort === "input") sortNum = ite;
  if (sort === "description")
    sortNum = ite
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortNum = ite.slice().sort((a, b) => {
      Number(a) - Number(b);
    });

  function Clear() {
    setSort("input");
    setItem([]);
  }
  return (
    <div>
      <div className="packingList">
        {sortNum.map((item) => {
          return <Item item={item} Delete={Delete} update={update} />;
        })}
      </div>
      <div>
        <select
          className="category"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="input">input</option>
          <option value="description">description</option>
          <option value="packed">packed</option>
        </select>
        <button onClick={Clear}>clear</button>
      </div>
    </div>
  );
}
