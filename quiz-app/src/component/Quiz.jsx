import React,{useState} from "react";
import { Link } from "react-router-dom";
import data from "../resources/questions.js"

const Quiz=()=>{
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);

    let handleNext=()=>{
        if(currentQuestion==data.length-1){
            setCurrentQuestion(0)
        }
        else{
            setCurrentQuestion((previous)=>previous+1)
        }
    }

    let handlePrevious=()=>{
        if(currentQuestion==0){
            setCurrentQuestion(data.length-1)
        }
        else{
            setCurrentQuestion((previous)=>previous-1)
        }
    }
    
    let handleQuit=()=>{
        window.confirm("Are you sure you want to quit?");
    }

    let handleOption=(e)=>{
        if(e.target.value==data[currentQuestion].answer){
            alert("Correct Answer")
            setScore((previous)=>previous+1)
        }
        else{
            alert("Wrong Answer")
            setCurrentQuestion((previous)=>previous+1)
        }
    }

    let handleFinish=()=>{
        localStorage.setItem("score",score)
        localStorage.setItem("current question",currentQuestion)
    }

    return(
        <div className="quiz-section flex-centered">
            <div className="quiz-container">
                <h2>Question</h2>
                <div className="questionNumber">
                    <p><span>{currentQuestion+1}</span>of 15</p>
                </div>
                <p>{data[currentQuestion].question}</p>
                <div className="options">
                    <button className="option" onClick={handleOption}>{data[currentQuestion].optionA}</button>
                    <button className="option" onClick={handleOption}>{data[currentQuestion].optionB}</button>
                    <button className="option" onClick={handleOption}>{data[currentQuestion].optionC}</button>
                    <button className="option" onClick={handleOption}>{data[currentQuestion].optionD}</button>
                </div>
                <div className="navigationOptions">
                    <button className='navigation-button previous' onClick={handlePrevious}>Previous</button>
                    <button className='navigation-button next' onClick={handleNext}>Next</button>
                    <button className='navigation-button quit' onClick={handleQuit}>Quit</button>
                    <Link to={"/result"}><button className="navigation-button finish" onClick={handleFinish}>Finish</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Quiz