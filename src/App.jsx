import { useEffect, useState } from 'react'

import './App.css'

// functional component
function App() {
  const [cats, setCats] = useState([])
  const [counter, setCounter] = useState(1)
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    fetch('https://cataas.com/api/cats?limit=12&skip='+skip)
      .then(response => response.json())
      .then(commits => setCats(commits));
    setTimeout(() => {
      console.log(cats);
      
    }, 2000);
    
  }, [skip])
  
  
  
  function getCats(direction){
    if(direction == "forwards"){
      setSkip(s => s+12)
    }
    else{
      setSkip(s =>s == 0? 0 : (s-12))
    }
  }

  return (
    <div className="cats">
      <header>
        <h1>cat generator</h1>
        </header>
        <div className="catcards">
      {

        cats.map((el, id) => {
          return <div>
            <img src={"https://cataas.com/cat/"+el["_id"]} alt="" />
            <ul>
              {
                el.tags.map((tag, index) => {
                  return <li>{tag}</li>
                })
              }
            </ul>
          </div>
        })
      }
      </div>
      <div className="arrows">
        <button onClick={() => getCats("backwards")}></button>
        <button onClick={() => getCats("forwards")}></button>
      </div>
    </div>
  )
}

export default App

// hw:
// continue the page



// make rainbow letters