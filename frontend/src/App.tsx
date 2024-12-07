
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import BlogPage from "./pages/Blog";
export default function App() {


  return (
   
 <Router>
  <Layout>
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<BlogPage />} />
  </Routes>
  </Layout>
 </Router>
  )
}

