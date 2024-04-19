
import React, {useState}  from 'react'
import './EightBall.css'

const defaultAnswers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

const EightBall =({answers = defaultAnswers})=>{
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black",
    })

    const [redCount, setRedColor] = useState(0);
    const [greenCount, setGreenColor] = useState(0);
    const [goldCount, setGoldColor] = useState(0);


    const handleClick = ()=>{
        const answer = defaultAnswers[Math.floor(Math.random()*defaultAnswers.length)]
        
        switch(answer.color){
            case 'red':
                setRedColor(redCount+1);
                break;
            case 'green':
                setGreenColor(greenCount+1);
                break;
            case 'goldenrod':
                setGoldColor(goldCount+1);
                break;
            default:
                break;
        }
   
       
        setAnswer(answer);
    }

    const reset = () =>{
        const Init ={
            msg: "Think of a Question",
            color: "black",
        };
        setAnswer(Init);
        setRedColor(0);
        setGreenColor(0);
        setGoldColor(0);

    }
    

    


    return (
        <>
        <div className='EightBall'
            onClick={handleClick}
            style={{backgroundColor: answer.color}}
        >
            <b>{answer.msg}</b>

        </div>
        <p>Red Color: {redCount}</p>
        <p>Green Color: {greenCount}</p>
        <p>Gold Color: {goldCount}</p>

        <button onClick={reset}>Reset</button>

        </>

    )
}

export default EightBall;