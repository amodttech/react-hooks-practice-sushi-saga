import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [beginDex, setBeginDex] = useState(0)
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false }
        })
        setSushi(updatedSushis)
      })
  }, [])

  const displaySushis = sushi.slice(beginDex, beginDex + 4)

  function handleMore(){
    setBeginDex(beginDex + 4)
  }


  function handleEatSushi(sushi){
    if (wallet >= sushi.price) {
    sushi.eaten = true
    setWallet(wallet - sushi.price)
    } else {
      alert("no money")
    }
    
  }

  const eatenSushis = sushi.filter((sushi) => sushi.eaten);


  return (
    <div className="app">
      <SushiContainer 
      sushis={displaySushis} 
      onPlateClick={handleEatSushi} 
      onMoreClick={handleMore}
      />
      <Table 
        plates={eatenSushis}
        wallet={wallet}
      />
    </div>
  );
}

export default App;
