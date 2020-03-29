import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const Modals = () => {
    const [modal, setModal] = useState(false)
    return ( 
        <div>
         {/* => modal will open if set to true, 
         =>onRequestClose makes the modal to close when clicked outside or ESC button,
         =>shouldCloseOnOverlayClick will not allow the modal to close when the outside 
         of the overlay is clicked, only ESC button closes it
         styling is done using inline prop style
         */} 
            <button onClick={()=>setModal(true)}>Open Modal</button>
            <Modal isOpen={modal} 
            shouldCloseOnOverlayClick={false} 
            onRequestClose={()=>setModal(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'green'
                    },
                    content:{
                        color: 'orange',
                        
                    }
                }
                }
            
            >
            <h2>hello, i am sam</h2>
            <p>Egugun be careful there!</p>
            <div>
                <button onClick={()=>setModal(false)}> Close </button>
            </div>
            </Modal>
        </div>
     );
}
 
export default Modals;