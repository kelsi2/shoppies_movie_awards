import '../styles/App.css';
import oscarIcon from '../images/oscarIcon.svg';
import Search from './Search';
import '../styles/Header.css';
import {ToastContainer} from 'react-toastify';

function App() {
  return ( 
    <div className = "App" >
      {/* Container for alerts, only show 3 maximum at once */}
      <ToastContainer limit={3} />
      <header className = "app-header" >
        <img className="trophy" src={oscarIcon} alt="Oscars trophy" />        
        <h1 className="header-text">The Shoppies</h1>
        <img className="trophy" src={oscarIcon} alt="Oscars trophy" />
      </header>
      <hr className="section-rule" />
      <Search />
    </div>
  );
}

export default App;