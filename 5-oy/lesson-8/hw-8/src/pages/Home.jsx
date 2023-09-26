import React from 'react'
// import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Hero from '../components/Hero'


const Home = () => {
  let [categoryObj, setCategoryVal]=useState([]);
  let [token,setToken]=useState('')
  let [category, setCategory]=useState(9);
  let [difficulty, setDifficulty]=useState("easy");
  let [type, setType]=useState("multiple");
  let [minute, setMinute]=useState(2);
  let [second, setSecond]=useState(59);
  let [limit, setLimitVal]=useState(5);
  let [play, setPlay]=useState(false);
  useEffect(()=>{
    fetch('https://opentdb.com/api_category.php')
            .then(res=>res.json())
            .then(json=>setCategoryVal(json.trivia_categories))
    fetch('https://opentdb.com/api_token.php?command=request')
            .then(res=>res.json())
            .then(json=>setToken(json.token))
    setPlay(false)
  },[]) 
  console.log(123);
  console.log(token); 
  let obj={
    "category":category,
    "difficulty":difficulty,
    "type":type,
    "limit":limit,
    "minute":minute,
    "second":second,
    'token':token,
  }
  let i=0
  let arr=[]
  while (i<60){
    arr.push(i);
    i++;
  }  
  let j=1
  let arr2=[]
  while (j<51){
    arr2.push(j);
    j++;
  }
  function selectChange(e){
    let SelectVal = +e.target.value;
    setCategory(SelectVal);
  }
  function questionLimitChange(e){
    let SelectVal = +e.target.value;
    setLimitVal(SelectVal);
  }
  function difficultChange(e){
    let SelectVal = e.target.value;
    setDifficulty(SelectVal);
  }
  function typeChange(e){
    let SelectVal = e.target.value;
    setType(SelectVal);
  }
  function minuteChange(e){
    let SelectVal = +e.target.value;
    setMinute(SelectVal);
  }
  function secondChange(e){
    let SelectVal = +e.target.value;
    setSecond(SelectVal);
  }
  function handelPlay(){
    setPlay(true)
  }
  console.log(obj);
  return (
    <>
    {
      (!play) ? 
      <section className='home container mt-3 pt-4 pb-4 border'>
        <div className='row'>
            <div className="col-3"><img src="/quiz.jpg" alt="" /></div>
            <div className="col-9 d-flex flex-column">
              <h1>The Ultimate Trivia Quiz</h1>
                  
              <select onChange={(e)=>selectChange(e)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>select quiz category</option>
                  {categoryObj.map(e=>(
                    <option value={e.id} key={e.id}>{e.name}</option>
                  ))}
                  {/* <option value="2">Two</option>
                  <option value="3">Three</option> */}
                </select>             
                <select onChange={(e)=>questionLimitChange(e)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>select no. of questions</option>
                  {arr2.map(e=>(
                    <option value={e} key={e}>{e}</option>
                  ))}
                </select>             
                <select onChange={(e)=>difficultChange(e)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>select difficulty level</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>             
                <select onChange={(e)=>typeChange(e)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>select questions type</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="boolean">True/False</option>
                </select>
                <div className='d-flex gap-5'>
                  <h2>Time:</h2>
                <select onChange={(e)=>minuteChange(e)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>Minute</option>
                  {arr.map(e=>(
                    <option value={e} key={e}>{e}</option>

                  ))}
                </select>
                <select onChange={(e)=>secondChange(e)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>Second</option>
                  {arr.map(e=>(
                    <option value={e} key={e}>{e}</option>

                  ))}
                </select>

                </div>

                <a onClick={handelPlay} className='play d-flex align-items-center ' to='/about'><img  src="/play.jpg" alt="" /><h3>Play Now</h3></a>
                {/* <Hero props={obj}/> */}
            </div>
        </div>
      </section>
    :
     <Hero props={obj}/>
    }



    </>
  )
}

export default Home
