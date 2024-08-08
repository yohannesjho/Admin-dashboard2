import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Dashboard from "./pages/Dashboard"
import Product from "./components/Product"

function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path="/products" element={<Product />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
