import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
