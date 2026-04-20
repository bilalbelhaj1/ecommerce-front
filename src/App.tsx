import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./pages/admin/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Hello</h1>}/>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;