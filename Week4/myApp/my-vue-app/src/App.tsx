import "./App.css";
import Greeter, { Hello, GetQuote } from "./component/greeter";
import catalog from "./component/catalog";
import StateDemo from "./component/StateDemo";

function App() {
  const cartDetails = ["abc", "xyz"];
  const skillSet = ["java", "javascript", "typescript", "python"];
  function GetGreeting(user?: string): JSX.Element {
    if (user) {
      return <h3>Hello {user}</h3>;
    }
    return <h3>Hello stranger</h3>;
  }

  function showCart() {
    const cart = ["1bc", "2bc"];
    return cart.length === 0 ? (
      <div>cart is empty,continue shopping</div>
    ) : (
      <div>
        <p>proceed for payment</p>
      </div>
    );
  }

  return (
    <>
      <h1>NGE Lernings</h1>
      // --view render component code-- //
      {/* <catalog /> */}
      <Greeter name="anchal" />
      <StateDemo />
      <Hello />
      <GetQuote />
      <p>{GetGreeting()}</p>
      <p>{showCart()}</p>
      <p>{cartDetails.length === 0 ? "no data available" : "data available"}</p>
      <p>{cartDetails.length != 0 && "data available"}</p>
      <ul>
        {skillSet.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
      <table>
        <tbody>
          {skillSet.map((list, index) => (
            <tr key={index}>
              <td>{list}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
