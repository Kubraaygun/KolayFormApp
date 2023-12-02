import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Form from "./form";

/*
 *
 *
 *
 */

function App() {
  let kendiAdim = "Benim Adim Kubra";
  const pstil = {
    color: "red",
    fontSize: "35px",
  };

  return (
    <div>
      <Header />

      <Form />
    </div>
  );
}

export default App;
