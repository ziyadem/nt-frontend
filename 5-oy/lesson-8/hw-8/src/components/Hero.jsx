import React from 'react'
import { useState,useEffect } from 'react'
import Result from './Result'

// "category":category,
// "difficulty":difficulty,
// "type":type,
// "limit":limit,
// "minute":minute,
// "second":second,

const Hero = ({props}) => {
let [question,setQuestion]=useState('')
let [n,setQuestionNumber]=useState(0)
let [disabletBTN,setBTN]=useState(true)
let [res,setResult]=useState([])
let [minute,setMinute]=useState(props.minute)
let [second,setSecond]=useState(props.second)

useEffect(()=>{
  fetch(`https://opentdb.com/api.php?amount=${props.limit}&category=${props.category}&difficulty=${props.difficulty}&type=${props.type}&token=${props.token}`)
              .then(res=>res.json())
              .then(json=>setQuestion(json.results))
},[])

// let rnd= Math.floor(Math.random() * (4 - 1 + 1) + 1);
let rnd=4
function handleNextQuestion(e){
  if(n<question.length && (minute!=0 && second!=0)){
    setQuestionNumber(n+1);
  }
}
setTimeout(() => {
  if(second>0 && minute>-1){
    setSecond(second-1)
  }
  if(second==0 && minute==0){
    alert("vaqt tugadi")
  }
  if(second==0 && minute>0) {
    setMinute(minute-1)
    setSecond(59)
  }
}, 1000);


function handleCorrectAnswers(e){
let k=e.target.id;
let obj1={
  'n':n,
  'question':question[n].question,
  'correct_answer':question[n].correct_answer,
  'useor_answers':k,
  "time":(props.minute*60+props.second)-(minute*60+second),
}


res.forEach(e=>{
  if(e.n==obj1.n){
    res.pop()
  }
})
res.push(obj1)
if(res.length==(n+1)){
  setBTN(false)
}else{
  setBTN(true)
}
console.log(123);
console.log(res);
}

  return (
    <>
     { 
    (!question)? 
    <div className='logo-div'>
       <img src="/load.gif"  alt="" />
    </div>:
      (second==0 && minute==0)?
          <Result  resProp={res}/>:
      (rnd===4 && n<question.length)?
        <section className="about container mt-2 border rounded pt-3 pb-3">
            <div className="nomer-time d-flex justify-content-between">
              <h2 className='item'>Question No. <span>{n+1}</span> of {question.length}</h2>
              <span className='d-flex '>
                <p className='itemtime'>{minute}</p>
                <p className='itemtime time3'>{second}</p>
              </span>
            </div>
            <h4 className='item mt-3'>{question[n].question}</h4>
            <h6 className='text-secondary mt-5 answer pb-2'>Please choose one of the following answers:</h6>
            <div>
              <p className='item' id={question[n].incorrect_answers[0]}   onClick={(e)=>handleCorrectAnswers(e)}>A. {question[n].incorrect_answers[0]}</p>
              <p className='item' id={question[n].incorrect_answers[1]}  onClick={(e)=>handleCorrectAnswers(e)}>B. {question[n].incorrect_answers[1]}</p>
              <p className='item' id={question[n].incorrect_answers[2]}  onClick={(e)=>handleCorrectAnswers(e)}>C. {question[n].incorrect_answers[2]}</p>
              <p className='item' id={question[n].correct_answer} onClick={(e)=>handleCorrectAnswers(e)}>D. {question[n].correct_answer}</p>
              <span className='w-100 d-flex justify-content-end'>

              {/* <button type="button"  className='next d-flex align-items-center justify-content-center' ><h3>Next</h3><img  src="/play.jpg" alt="" /></button> */}
              <button disabled={disabletBTN} onClick={(e)=>handleNextQuestion()}  type="button" className="btn btn-primary">Next</button>
              </span>

            </div>
            </section> 
        :
      (rnd===3 && n<question.length)?
      <section className="about container mt-2 border rounded pt-3 pb-3">
      <div className="nomer-time d-flex justify-content-between">
        <h2 className='item'>Question No. <span>{n+1}</span> of {question.length}</h2>
        <span className='d-flex '>
          <p className='itemtime'>00</p>
          <p className='itemtime time2'>00</p>
          <p className='itemtime time3'>00</p>
        </span>
      </div>
      <h4 className='item mt-3'>{question[n].question}</h4>
      <h6 className='text-secondary mt-5 answer pb-2'>Please choose one of the following answers:</h6>
      <div>
        <p className='item' id={question[n].incorrect_answers[0]}>A. {question[n].incorrect_answers[0]}</p>
        <p className='item' id={question[n].incorrect_answers[1]}>B. {question[n].incorrect_answers[1]}</p>
        <p className='item' id={question[n].correct_answer} onClick={handleCorrectAnswers}>C. {question[n].correct_answer}</p>
        <p className='item' id={question[n].incorrect_answers[2]}>D. {question[n].incorrect_answers[2]}</p>
        <span className='w-100 d-flex justify-content-end'>

        <a onClick={handleNextQuestion} className='next d-flex align-items-center justify-content-center' ><h3>Next</h3><img  src="/play.jpg" alt="" /></a>
        </span>

      </div>
      </section> 
       :
      (rnd===2 && n<question.length)? 
      <section className="about container mt-2 border rounded pt-3 pb-3">
      <div className="nomer-time d-flex justify-content-between">
        <h2 className='item'>Question No. <span>{n+1}</span> of {question.length}</h2>
        <span className='d-flex '>
          <p className='itemtime'>00</p>
          <p className='itemtime time2'>00</p>
          <p className='itemtime time3'>00</p>
        </span>
      </div>
      <h4 className='item mt-3'>{question[n].question}</h4>
      <h6 className='text-secondary mt-5 answer pb-2'>Please choose one of the following answers:</h6>
      <div>
        <p className='item' id={question[n].incorrect_answers[0]}>A. {question[n].incorrect_answers[0]}</p>
        <p className='item' id={question[n].correct_answer} onClick={handleCorrectAnswers}>B. {question[n].correct_answer}</p>
        <p className='item' id={question[n].incorrect_answers[1]}>C. {question[n].incorrect_answers[1]}</p>
        <p className='item' id={question[n].incorrect_answers[2]}>D. {question[n].incorrect_answers[2]}</p>
        <span className='w-100 d-flex justify-content-end'>

        <a onClick={handleNextQuestion} className='next d-flex align-items-center justify-content-center' ><h3>Next</h3><img  src="/play.jpg" alt="" /></a>
        </span>

      </div>
      </section> 
       :
      (rnd===1 && n<question.length)? 
      <section className="about container mt-2 border rounded pt-3 pb-3">
      <div className="nomer-time d-flex justify-content-between">
        <h2 className='item'>Question No. <span>{n+1}</span> of {question.length}</h2>
        <span className='d-flex '>
          <p className='itemtime'>00</p>
          <p className='itemtime time2'>00</p>
          <p className='itemtime time3'>00</p>
        </span>
      </div>
      <h4 className='item mt-3'>{question[n].question}</h4>
      <h6 className='text-secondary mt-5 answer pb-2'>Please choose one of the following answers:</h6>
      <div>
        <p className='item' id={question[n].correct_answer} onClick={handleCorrectAnswers}>A. {question[n].correct_answer}</p>
        <p className='item' id={question[n].incorrect_answers[0]}>B. {question[n].incorrect_answers[0]}</p>
        <p className='item' id={question[n].incorrect_answers[1]}>C. {question[n].incorrect_answers[1]}</p>
        <p className='item' id={question[n].incorrect_answers[2]}>D. {question[n].incorrect_answers[2]}</p>
        <span className='w-100 d-flex justify-content-end'>

        <a onClick={handleNextQuestion} className='next d-flex align-items-center justify-content-center' to='/about'><h3>Next</h3><img  src="/play.jpg" alt="" /></a>
        </span>

      </div>
      </section> 
      :
      <Result  resProp={res}/>

    } 
       
    </>
  )
}

export default Hero

