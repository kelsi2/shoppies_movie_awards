import '../styles/App.css';
import oscarIcon from '../images/oscarIcon.svg';
import Search from './Search';

function App() {
  return ( 
    <div className = "App" >
      <header className = "app-header" >
        <h1>The Shoppies</h1>
        <img className="trophy" src={oscarIcon} alt="Oscars trophy" />
      </header>
      <hr className="section-rule" />
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;