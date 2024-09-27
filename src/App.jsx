import './App.css'
import { Menus } from './components/Menu'
import { StickyHeader } from './components/StickyHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [selectedCateg,setSelectedCateg] = useState('all')

  return (
    <div className="flex shadow font-sans md:font-serif flex-col ">
      <StickyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
      <Menus selectedCateg={selectedCateg}/>

      


    </div>
  )
}

export default App
