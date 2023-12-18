import react,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [response,changeResponse]=useState({state:false})
  useEffect(()=>{console.log(response.state);},[response])
   
  const action = async ()=>{
    console.log("trigered");
    try {
      // Make a GET request using Axios
      const res = await axios.get('http://localhost:1111/api');
      // Update state with fetched data
      changeResponse(res.data);
      console.log(res.data);

    } catch (err) {
      // Handle errors
      console.log(err);
    }
  }
  return (
    <div className="App">
{     response.state?<p>{response.message}</p>:<p>{response.state}</p>
}     <button onClick={action}>click me</button>
    </div>
  );
}

export default App;
