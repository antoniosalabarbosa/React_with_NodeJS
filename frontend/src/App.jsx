//import {useState} from 'react'

function App() {

  let res = [];
  async function getData(){
    const response = await fetch('http://localhost:3000/')
    .then(r => r.json());

    console.log(response);
  }
  getData();

  return (
    <>
      <h1>Teste</h1>
    </>
  )
}

export default App;