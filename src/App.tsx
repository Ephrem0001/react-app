import Alert from "./components/ListGroup";
import './App.css';

function App(){
  const items = ["Newyork", "Los Angeles", "Chicago"];
  return (
    <div >
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
 