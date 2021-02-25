import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Navbar from "./components/navbar.component";
import Search from "./components/search.component";
import Movies from "./components/movies.component";
import Pagiation from "./components/pagination.component";
import Pagination from "./components/pagination.component";

function App() {
  return (
          <div>
            <Navbar />
            <Search />
            <Movies/>
            <Pagination/>
          </div>
    );
}

export default App;
