import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return (
    <div className="my-2 mx-auto p-4 flex flex-col items-center justify-center bg-gray-200 rounded-xl w-7/12">
        <h1 className="font-bold text-5xl m-2">About</h1>
        <h2 className={"text-3xl text-gray-600 m-2 p-2"}>Bite Hub Food ordering website</h2>
        <h2 className={"text-3xl text-gray-600 "}> Created by-</h2>
        <UserClass name={"Tanishq Sethi"} location={"Delhi"} contact={"@TanishqSethi13"}/>{/*class based component*/}
    </div>
    )
}
export default About;