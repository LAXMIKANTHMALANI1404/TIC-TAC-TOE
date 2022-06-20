import ButtonBox from './ButtonBox';
import './Wrapper.css'
import Button from './Button';
import React, { useEffect, useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const Wrapper = () => {
    let [x, setX] = useState('O');
    let [te,setText]=useState("Player 1: O");
    let [cnt,setCnt]=useState(0);
    let [win,SetWin]=useState(0);
    //[null,nll],[null,null]
    let res = [null, null, null, null, null, null, null, null, null];
    let [buttons, setButton] = useState([null, null, null, null, null, null, null, null, null]);
    const winner = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    useEffect(() => {
       
        setText(x == 'X' ? "Player 2 : X" : "Player 1 : O")
        winner.map(y => {
            
            if (buttons[y[0]] && buttons[y[1]] == buttons[y[0]] && buttons[y[2]] == buttons[y[1]]) {
               
                setText(buttons[y[0]] == 'X' ? "Winner🎉 : player 2🙇" :"Winner🎉 : Player 1🙇");
                SetWin(1);
                console.log(buttons)
            }
            
        })
        setCnt(cnt + 1);
        
},[buttons])
useEffect(()=>{
    console.log(cnt,buttons);
    if(win==0 && cnt==10){
        setText("DRAW")
    }
},[cnt])

    const onClick = (i) => {
        if(win==1){
            setText("Please RESTART the Game")
        }
        if (buttons[i] == null) {
            
            if (x == 'O') {
                setX('X');
            }
            else {
                setX('O');
            }
            let newArr = [...buttons];
            newArr[i] = x;
            setButton(newArr);
            // setButton(buttons => [...buttons, buttons[i] = x]);
            // console.log(buttons, i);
            
        }
        
    }
    let SA=()=>{
        setButton(res);
        setCnt(0);
        setX('O');
        setText("Player 1: O");
        SetWin(0);
    }
    let disable=(e)=>{
        
        setText("RESTART the Game")

    }

    return (<>
        <div className="wrapper">
            <h1 className='move'>{te}</h1>
            <ButtonBox>
                {
                    buttons.flat().map((button, i) => {

                        return <Button key={i} button={button} onClick={win == 0 ?() => onClick(i):()=>disable()} />
                    })
                }
            </ButtonBox>
            <button id="res" onClick={()=>SA()}>RESTART</button>
        </div>
    </>
    )
}
export default Wrapper;