import { useState,useEffect } from "react";
import axios from 'axios';


export default function Home() {
     const [output,setOutput] = useState([]);
    
     const getData = () => {
      axios.get('https://api.quotable.io/random')
      .then(
        respose => {
          console.log(respose.data);
          setOutput(respose.data.content);
          console.log(output);
        }
      ).catch(err => {
        console.log(err)
      })
     }
     
     return (
      <div class = 'App'>
        <h1>Homepage</h1>
        <view>
        <button onClick={getData}>Generate</button>
        </view>
        {output ? <p>{output}</p> : null}
      </div>
    );

    
}





// https://api/publicapis.org/entries
// https://api.quotable.io/random