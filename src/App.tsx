import { useEffect, useState } from "react";
import "./App.css";
import CustomLoader from "./reusables/CustomLoader";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <CustomLoader text="" />
      ) : (
        <>
          Hello this is my portfolio
        </>
      )}
    </>
  );
}

export default App;
