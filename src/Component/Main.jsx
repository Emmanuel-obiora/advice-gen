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
                        <small>Advice</small>
                        <span>#{data.id}</span>
                    </div>
                    <h1>"{data.advice}"</h1>
                </div>
        }

        <span className='main-pattern'></span>
        <div className="main-bottom" onClick={advice}>
            <img src={IconDice} alt=""/>
        </div>
    </main>
  )
}

export default Main