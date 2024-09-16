import "./App.css";
import CustomLoader from "./reusables/CustomLoader";

function App() {
  return (
    <>
      <div>
        <CustomLoader text=""/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
