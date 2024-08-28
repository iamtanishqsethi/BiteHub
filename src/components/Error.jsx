import {useRouteError} from "react-router-dom";//this is a hook given by react router dom
//using this  hook it will give more details about the error
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default Error