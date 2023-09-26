import React from 'react'
import { useState } from 'react';

const Result = ({resProp}) => {
    let [qna,setQNA]=useState(false)

    console.log(resProp);
    let i=0
    resProp.forEach(e=>{
        if(e.correct_answer===e.useor_answers){
           i++;
        }
    })
    function handlQNA(){
        setQNA(true)
    }
    function handStat(){
        setQNA(false)
    }
    function windowsLocation(){
        windows.location()
    }
    console.log(qna);
  return (
    <section className='result container'>
          <div className='d-flex w-100 mt-3 '>
            <p onClick={handStat} className="item text-center w-50">stats</p>
            <p onClick={handlQNA} className="item text-center w-50">QNA</p>
          </div>
          {(!qna)?
          <div>
          <p className="item text-center">{(i>resProp.length/2)? 'YOU  ARE  GOOD' : "Sorry, YOU FAILED!"}</p>
          <p className="item text-center">Grade: {(i>resProp.length/2)? "G":"F"}</p>
          <p className="item text-center">Total Questions: {resProp.length}</p>
          <p className="item text-center">Correct Answers: {i}</p>
          <p className="item text-center">Correct Answers: {i*100/resProp.length}%</p>
          <p className="item text-center">Passing Score: 60%</p>
          <p className="item text-center">Time Taken: {Math.floor((resProp[resProp.length-1].time)/60)}m{(resProp[resProp.length-1].time)%60}s</p>
          <div className="d-flex gap-3 mb-2">
          {/* <a  className='next result-buton d-flex align-items-center justify-content-center' > <h3>Play Again</h3></a> */}
           <a onClick={windowsLocation}  className='next result-buton d-flex align-items-center justify-content-center' ><h3>Back to Home</h3></a>

          </div>
          </div>
          :
          <table >
            <tr className='d-flex '>
                <th className='res-table c1'>N</th>
                <th className='res-table c2'>Questions</th>
                <th className='res-table c3'>Your Answers</th>
                <th className='res-table c4'>Correct Answers</th>
                <th className='res-table c5'>Points</th>
            </tr>
            {
                resProp.map(e=>(
                <tr key={e.n} className='d-flex '>
                    <td className='res-table c1'>{e.n+1}</td>
                    <td className='res-table c2'>{e.question}</td>
                    <td className='res-table c3'>{e.useor_answers}</td>
                    <td className='res-table c4'>{e.correct_answer}</td>
                    <td className='res-table c5'>{(e.useor_answers===e.correct_answer)? '1':'0'}</td>
                </tr>

                ))
            }
            </table>
        }
    </section>
  )
}

export default Result
