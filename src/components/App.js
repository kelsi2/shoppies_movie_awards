import '../styles/App.css';
import Search from './Search';

function App(props) {
  return ( 
    <div className = "App" >
      <header className = "App-header" >
        <h1> Welcome to the Shoppies </h1> 
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;