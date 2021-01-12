import {useState} from 'react';
import '../styles/App.css';
import oscarIcon from '../images/oscarIcon.svg';
import Search from './Search';
import Toast from './Toast';
import checkIcon from '../images/check.svg';
import infoIcon from '../images/info.svg';


function App() {
  const [list, setList] = useState([]);

  const testList = [
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: checkIcon
    },
    {
      id: 2,
      title: 'Danger',
      description: 'This is an error toast component',
      backgroundColor: '#5bc0de',
      icon: infoIcon
    },
  ];

  return ( 
    <div className = "App" >
      <header className = "app-header" >        
        <h1 className="header-text">The Shoppies</h1>
        <img className="trophy" src={oscarIcon} alt="Oscars trophy" />
      </header>
      <hr className="section-rule" />
        <Toast toastList={testList} />
        <Search />
    </div>
  );
}

export default App;