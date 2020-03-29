import React,{ Fragment} from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const colourTooltip = () =>{
    return <span style={{color:'green'}}>color me</span>
}

const customTip = (props) =>{
    return (
        <div>
            <div>
            <button>First</button>
            </div>
            <div>
            <button>sexcond</button>
            </div>
        <div>
        <button>Third</button>
        </div>
        <div>
             <button>Fourth</button>
        </div>
        
       
        </div>
    )
}

 {/* 
        => using arrow props disables the tippy arrow on hover 
    => the delay props is used for setting the time on mouseOver and after 
    =>placement props determines the postion of the arrow*/}

const Tooltip = () => {
    return ( 

       
            <Fragment>
        <div style={{paddingBottom: '20px'}}>
            <Tippy 
            delay={1000}
            content='hover over me'>
                <button>Hover me</button>
            </Tippy>
        </div>
        <div style={{paddingBottom: '20px'}}>
            <Tippy content={<span style={{color:'red'}}>helor</span>}>
                <button>Hover me</button>
            </Tippy>
        </div>
         <div style={{paddingBottom: '20px'}}>
         <Tippy placement="bottom" content={colourTooltip()}>
             <button>Third one</button>
         </Tippy>
     </div>
     <div style={{paddingBottom: '20px'}}>
         <Tippy content={customTip()}>
             <button>Third one</button>
         </Tippy>
     </div>
     </Fragment>
     );
}
 
export default Tooltip;

