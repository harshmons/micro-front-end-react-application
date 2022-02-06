import './App.css';
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import RightSidebar from "./modules/RightSidebar";
import LeftSidebar from './modules/LeftSidebar';
import {ReactComponent as ReactLogo} from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div className="main-app">
        <h1>Main Application in</h1>
        <ReactLogo className="react-logo"/>
      </div>
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
