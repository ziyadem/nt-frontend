import axios from "axios";
import {useRef} from 'react';
import { useEffect,useState } from 'react';


function App() {
   let key = '514733d9efa114b7e1bbbcdf7e3d2a04';
  //  let defaultCity= axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=514733d9efa114b7e1bbbcdf7e3d2a04&units=metric`)
  //  console.log(defaultCity);
   let [data,useData]=useState()
   let input=useRef();
  function handelInput(e){
    e.preventDefault();
    let inputValue=input.current.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=514733d9efa114b7e1bbbcdf7e3d2a04&units=metric`)
   .then(function (response) {
    useData(response.data);
    })
    .catch(function (error) {
      alert("Not a city")
    })
  }
  console.log(data);
  return (
    <div className='hero-body d-flex flex-column align-items-center justify-content-center'> 
      <h1 className="text-center pb-3">Weather</h1>
    <div className="weather-body p-5 w-50">
      <form onSubmit= {(e)=> handelInput(e)}>
      <div className="input-group mb-3">
        <input ref={input} type="text" className="form-control" placeholder="City Name" aria-label="Recipient's username"/>
        <button className="btn btn-primary " type="button" id="button-addon2">submit</button>
      </div>
      </form>
      <div className=" d-flex justify-content-between">
        <div className="w-50">
          <img className="w-100" src={data?.weather?.[0]?.main==="Rain" ? "/rain.png" : data?.weather?.[0]?.main==="Snow" ?  "/snow.jpg" : data?.weather?.[0]?.main==="Clear" ? "/sun.png" : "/wind.png"} alt="" />
        </div>
        <ul className="w-50">
          <li><h2>{data?.name}</h2></li>
          <li><h3>{data?.main?.temp} *C</h3></li>
          <li><h4>{data?.weather?.[0]?.main}</h4></li>
          <li><p>{data?.weather?.[0]?.description}</p></li>
        </ul>
      </div>

    </div>
      
    </div>
  )
}

export default App
