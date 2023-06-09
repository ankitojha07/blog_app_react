import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";

//components
import Navbar from "./components/Navbar";
import ReactPractice from "./pages/ReactPractice";
import ApiTesting from "./pages/ApiTesting";
import JSPractice from "./pages/JSPractice";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="/practice-react" element={<ReactPractice />} />
          <Route path="/api-test" element={<ApiTesting />} />
          <Route path="/js-practice" element={<JSPractice />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
