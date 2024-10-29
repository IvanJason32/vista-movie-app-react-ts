import Detail from "./components/detail";
import Main from "./components/main/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";

const App = () => {
  const url = import.meta.env.VITE_BASE_URL;
  console.log(url);

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
