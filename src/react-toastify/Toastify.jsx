import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({closeToast}) => {
    return (
        <div>
            something went wrong!
            <button onClick={closeToast}> close </button>
        </div>
    )
}
    toast.configure()
const Toastify = () => {
    const notify = () =>{

        toast(' i am toasting you o', {position: toast.POSITION.TOP_CENTER, autoClose:10000});
        toast.success(' i am toasting you o', {position: toast.POSITION.TOP_CENTER, autoClose:false});
        toast.info(' i am toasting you o', {position: toast.POSITION.TOP_CENTER});
        toast.warn(' i am toasting you o', {position: toast.POSITION.TOP_CENTER});
        toast.error(<CustomToast />, {position: toast.POSITION.TOP_CENTER});
    }
    return ( 
        <div>
            <button onClick={notify}>
                Notification
            </button>
        </div>
     );
}
 
export default Toastify;