import { MyButton, add } from "site-lib";

function App() {
  return (
    <MyButton onClick={() => alert("Result: " + add(2, 2))}>
      Add 2 and 2
    </MyButton>
  );
}

export default App;
