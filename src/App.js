import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";
import "./styles.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [ite, setItem] = useState([]);
  console.log(ite);
  function handleItem(item) {
    setItem([...ite, item]);
  }

  function Delete(id) {
    console.log(id);
    setItem((ite) => ite.filter((i) => i.id !== id));
  }
  function update(id) {
    console.log(ite);
    setItem((ite) =>
      ite.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }

  return (
    <div className="App">
      <Logo />
      <Form getItem={handleItem} />
      <PackingList
        ite={ite}
        Delete={Delete}
        update={update}
        setItem={setItem}
      />
      <Footer ite={ite} />
    </div>
  );
}
