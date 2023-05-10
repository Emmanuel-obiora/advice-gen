import React, {useState, useEffect} from 'react';
import IconDice from '../images/icon-dice.svg';

const Main = () => {
    const [data, setData] = useState('');

    const advice = () => {
        fetch('https://api.adviceslip.com/advice').then((data) => {
            // console.log(data);
            return data.json();
        }).then((completedata) => {
            // console.log(completedata);
            setData(completedata.slip);
        }).catch((err) =>{
            console.log(err);
        });
    }

    useEffect(()=> {
        advice();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <main className='main'>
        <div key={data.id} className="main-top">
            <div className="main-top-hh">
                <small>Advice</small>
                <span>#{data.id}?</span>
            </div>
            <h1>"{data.advice}"</h1>
        </div>

        <span className='main-pattern'></span>
        <img src={IconDice} alt="" onClick={advice} />
    </main>
  )
}

export default Main