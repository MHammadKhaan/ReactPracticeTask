import React, { useState } from "react";
import Message from "./assets/Components/Message";
import ListGroup from "./assets/Components/ListGroup";
import Alert from "./assets/Components/Alert";
import Button from "./assets/Components/Button";
import NavBar from "./assets/Components/NavBar";
import Cart from "./assets/Components/Cart";
import ExpandableText from "./assets/Components/ExpandableText";
import UseStateForm from "./assets/Components/UseStateForm";
import ReactForm from "./assets/Components/ReactForm";
import ReactZod from "./assets/Components/ReactZod";
import ExpanseTracker from "./assets/Components/ExpanseTracker";
import ExpanseList from "./assets/Components/ExpanseList";
import Filter from "./assets/Components/Filter";
import Card from "./assets/Components/Card";
// import "./App.css"
export const Categories = ["Goroceries", "Utility", "Entertainment"] as const;
export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "ali",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy",
    tooping: ["Mashrooms"],
  });
  const [cart, setCart] = useState<any>({
    discount: 1,
    items: [
      { id: 1, title: "Product-1", Quantity: 1 },
      { id: 2, title: "Product-2", Quantity: 1 },
    ],
  });
  const [drink, setDrink] = useState({
    title: "Pepsi",
    price: 100,
  });
  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "karachi",
      zipcode: "12345",
    },
  });
  const [bug, setBug] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);
  const [fruit, setFruit] = useState(["mango", "orange"]);
  const handleObject = () => {
    setBug(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setDrink({ ...drink, price: 50 });
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: "111" },
    });
    setFruit([...fruit, "banana"]);
    // setFruit(fruit.concat('apple'))//we can add this way too
    // setFruit(fruit.filter((item)=>item!=='apple'))//delete
    // setFruit(fruit.map((item)=>item==='mango'? 'watermillon':item))// Update
    console.log(bug);

    console.log(customer);
    console.log(fruit);

    console.log(drink);
  };
  const handleSelect = (item: string) => {
    console.log(item);
  };
  const handleUpdate = () => {
    setGame({ ...game, player: { ...game.player, name: "HAmmad" } });
    setPizza({ ...pizza, tooping: [...pizza.tooping, "sabze"] });
    // setCart({...cart,items:[...cart.items][0].Quantity=2})
    setCart({
      ...cart,
      items: [...cart.items].map((item) => {
        return item.id === 1 ? (item.Quantity = 3) : (item.Quantity = 2);
      }),
    });
    // setCart({...cart,items:[...cart.items].map((index)=>{items[]})})

    console.log(cart);
  };
  let items = ["Peshawer", "islamabad", "Quetta", "Lahore", " karachi"];
  const [cartitems, setCartitems] = useState(["product1", "product2"]);
  const [Expanses, setExpanses] = useState([
    { id: 1, description: "Flowers", amount: 100, category: "Groceries" },
    { id: 2, description: "Shampoo", amount: 100, category: "Utility" },
    { id: 3, description: "Cricket", amount: 100, category: "Entertainment" },
    { id: 4, description: "Flowers", amount: 100, category: "Utility" },
  ]);
  const [selectedcategory, setSelectedCategory] = useState("");

  const data = [
    {
      id: 1,
      title: "Basic",
      price: 100.0,
      color: "red",
    },
  ];
  const VisibleExpanse = selectedcategory
    ? Expanses.filter((expanse) => expanse.category === selectedcategory)
    : Expanses;
  return (
    <div>
      {/* <UseStateForm/> */}
      {/* <ReactForm/> */}
      {/* <ReactZod/> */}
      <ExpanseTracker
        onSubmit={(expanse) =>
          setExpanses([...Expanses, { ...expanse, id: Expanses.length + 1 }])
        }
      />

      <Filter onSelect={(category) => setSelectedCategory(category)} />
      <ExpanseList
        expanses={VisibleExpanse}
        onDelete={(id) => setExpanses(Expanses.filter((e) => e.id !== id))}
      />
      {/* <Card card={data}/> */}
      {/* <ExpandableText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        veritatis dolorum mollitia molestias in? Illum laudantium minus facere
        tenetur repudiandae eum magnam. Soluta dolorum nihil debitis placeat
        delectus fuga, sint illo, recusandae repellendus, qui blanditiis
        obcaecati doloribus nam officia eos aliquam ipsum non officiis
        exercitationem a assumenda ipsam ab? Cupiditate sit aliquam beatae rerum
        corrupti ipsam eveniet odio dignissimos, magni possimus! Voluptas, ab,
        debitis ipsam explicabo ipsa dolor repellendus, laboriosam minima
        mollitia provident nam officiis consectetur dolores doloribus veritatis
        soluta quasi illo sunt quibusdam molestiae dignissimos magni! Dolorum,
        commodi quo quam soluta laboriosam quos minus libero maiores dignissimos
        dolores accusantium!
      </ExpandableText>
      <NavBar cartitemsCount={cartitems.length} />
      <Cart cartitems={cartitems} onClear={() => setCartitems([])} />
      <Button title="update" color="btn-primary" onClick={handleObject} /> */}
      {/* <Button title="update" color="btn-primary" onClick={handleUpdate} /> */}
      {/* <div>{game.player.name}</div>
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>My Alert</Alert>
      )}
      <Button
        title="click here "
        color="btn-danger"
        onClick={() => setVisibility(true)}
      /> */}
      {/* <Alert>
        <h1>Hello-World</h1>
        <h2>HEllo</h2>
      </Alert> */}
      {/* <ListGroup items={items} heading="Cities" onSelected={handleSelect} /> */}
    </div>
  );
}
