import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h1>Hello KazBot!</h1>
      <button onClick={() => setClicked(true)}>Click me</button>
      {clicked && <p>You clicked the button!</p>}
    </div>
  );
}

export default App;





