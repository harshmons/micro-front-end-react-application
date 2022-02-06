import './App.css';
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import RightSidebar from "./modules/RightSidebar";
import LeftSidebar from './modules/LeftSidebar';

function App() {
  return (
    <div className="App">
      <h1>Main Application in React</h1>
      <header className="header-container">
        <Header></Header>
      </header>
      <div className="content">
        <LeftSidebar></LeftSidebar>
        <RightSidebar></RightSidebar>
      </div>
      <footer className="footer-container">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
