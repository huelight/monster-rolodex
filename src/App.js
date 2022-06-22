import { useState, useEffect } from 'react';
import logo from './logo.svg';
import Cardlist from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = ()=>{
  const [searchField, setSearchField] = useState(''); //[value, set value]
  const [title, setTitle]= useState('');
  const [monsters, setMonsters] = useState([]);
  
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.json())
  .then((users)=> setMonsters(users));
}, []);

 
  
  const onSearchChange =(event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString)
    }
    const onTitleChange =(event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
      }

    const filteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); 

  return(
    <div className="App">
      <h1 className='app-title'>{title}</h1>
           <SearchBox 
           onChangeHandler = {onSearchChange} 
           placeholder = {'search-monsters'} 
           className = 'monsters-search-box'
           />
           <br />
            <SearchBox 
           onChangeHandler = {onTitleChange} 
           placeholder = {'search-monsters'} 
           className = 'monsters-search-box'
           />
           <Cardlist monsters = {filteredMonsters} />
      </div>
  )
}
export default App;