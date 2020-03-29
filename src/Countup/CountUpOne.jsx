import React from 'react';
import CountUp, {useCountUp} from 'react-countup'
const CountUpOne= () => {
    {/*
    =>COUNTUP is used to read numbers up to a certain number 
=> the end props set the number at which the count up will end 
=> duration props set the time in seconds*
    => start props specifies the number at which the props starts
prefix and suffix let you add current front and 
back*
 =>decimals let you add decimal points
=> useCount up hooks allows more customization*/}

const {countUp, start,pauseResume, reset, update} =useCountUp({duration:5, end:10000, startOnMount:false})
    return ( 
        <div>
            <div>
                <h1>{countUp} </h1>
                <button onClick={start}>start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>pause</button>
                <button onClick={()=>update(2000)}>update</button>
            </div>
            <CountUp end={600} /><br/>
            <CountUp end={600} duration={5} /><br/>
           <h2>hello, pick your lucky:<CountUp start={200} prefix='$' decimals={2} end={900} duration={5}  /> </h2>
        </div>
     );
}
 
export default CountUpOne;