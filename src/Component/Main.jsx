import React, {useState, useEffect} from 'react';
import IconDice from '../images/icon-dice.svg';
import RingLoader from "react-spinners/RingLoader";

const Main = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    const advice = () => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice').then((data) => {
            // console.log(data);
            return data.json();
        }).then((completedata) => {
            // console.log(completedata);
            setData(completedata.slip);
            setLoading(false);
        }).catch((err) =>{
            console.log(err);
            setLoading(false);
        });
    }

    useEffect(()=> {
            advice();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <main className='main'>
        {
            loading? 
                <RingLoader
                    color={"hsl(150, 100%, 66%)"}
                    loading={loading}
                    size={50}
                    className='loaderr' 
                /> :
                <div key={data.id} className="main-top">
                    <div className="main-top-hh">
                        <h1>Advice</h1>
                        <span>#{data.id}</span>
                    </div>
                    <p>"{data.advice}"</p>
                </div>
        }

        <span className='main-pattern'></span>
        <button className="main-bottom" onClick={advice}>
            <img src={IconDice} alt=""/>
        </button>
    </main>
  )
}

export default Main