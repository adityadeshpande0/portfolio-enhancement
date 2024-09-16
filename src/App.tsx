import { useEffect, useState } from "react";
import CustomLoader from "./reusables/CustomLoader";
import AppRouter from "./router/AppRouter";

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
      <AppRouter />
    </>
  );
}

export default App;
