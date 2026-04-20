import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./pages/admin/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Hello</h1>}/>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;