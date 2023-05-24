import { useState,useEffect } from "react";
import axios from 'axios';


function Homes(){
  const [output,setOutput] = useState([]);
    useEffect(() =>{
      axios.get('https://api.publicapis.org/entries')
      .then(response => {
        console.log(response.data.entries);
        setOutput(response.data.entries);
        setOutput('asdasd');
    });


function Home() {
  
  
    return (

      <div>
        <h1>Home</h1>
      </div>
    );
}

export default Home;
