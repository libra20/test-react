// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert("ボタンが押されました");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "30px"
  };
  return (
    <>
      <h1 style={{ color: "red", fontSize: "50px" }}>test</h1>
      <p style={contentStyle}>test</p>
      <button onClick={onClickButton}>ボタン</button>
      {/* <ColorfulMessage color="blue" message="おはよう" /> */}
      <ColorfulMessage color="blue">おはよう</ColorfulMessage>
    </>
  );
};

export default App;
