import React, {useState, useRef} from 'react'
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';


Modal.setAppElement('#root')

const IdleTimers = () => {
    {/*
    => it is used to monitor acitivity
=> first create a Ref using UseRef Hooks
=> set timeount for do something when the time lapse 
=> onIdle set a ffunction when the timeout has lapse
=> Modal have onIdle={setYourFunction()} prop that is triggered when the timeout is lapsed
=>to log out after long period on inactivity use session Timeout by first creating a ref using useref(null)
and setting a timeout function on it you can also clear it with cleartimeout()*/}
const [isLoggedIn,setIsLogedIn] = useState(true);
const [modalIsOpen, SetModalIsOpen] = useState(false);
const onIdle = ()=>{
    console.log('i am idle');
    SetModalIsOpen(true);
    sessionTimerRef.current = setTimeout(logOut, 5000)
}

const logOut = () => {
    SetModalIsOpen(false);
    setIsLogedIn(false)
}

const login = () =>{
    SetModalIsOpen(false);
    setIsLogedIn(true);
    clearTimeout(sessionTimerRef)
}

const sessionTimerRef = useRef(null)
  const idleTimerRef = useRef(null)
    return ( 
        <div>
            {
            isLoggedIn ?  (
                <div>
                    <h1>Hi there, my name is sam. </h1>
                    <p> as you can see, i am very much online.</p>
                </div>
            ) : <h2> hello Anonymous</h2>
            }

            <Modal isOpen={modalIsOpen} >
                <h2>You have been idle for a while now</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={login}>Keep me sign In</button>
                </div>
            </Modal>


            <IdleTimer ref={idleTimerRef} timeout={5* 1000} onIdle={onIdle} />
        </div>
     );
}
 
export default IdleTimers;