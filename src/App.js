import { useState } from 'react';
import './App.css';
import Main from './View/Main';
import Info from './View/Info';
import list from './list';

function App() {

  const [listElement, setListElement] = useState(1);

  function after(){
    if(listElement > 1){
      setListElement(listElement-1);
    }
  }
  function next(){
    setListElement(listElement+1);
  }


  return (
    <div className="App">
      <Main />
      <header className="App-header">
        <p>{listElement}</p>
        <img src={list[listElement].element} className="App-logo" alt="logo" />
        <div className='img_description'>
          <p>{list[listElement].name}</p>
        </div>
        <div className='controlArea'>
          <span onClick={() => after()}>Voltar</span>
          <span onClick={() => next()}>Proximo</span>
        </div>
      </header>
      <Info />
    </div>
  );
}

export default App;
