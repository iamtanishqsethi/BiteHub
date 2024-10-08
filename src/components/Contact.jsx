const Contact = () => {
    return(
        <div className={"p-8 m-4 shadow-xl rounded-lg bg-gray-50"}>
            <h1 className={"font-bold text-4xl p-4 "}>Contact us</h1>
            <form  className={"flex flex-col px-8 py-4"}>
                <input type="text" className="border-black bg-gray-200 p-4 m-2 rounded-lg" placeholder={"Name"}/>
                <input type="email" className="border-black  bg-gray-200 p-4 m-2 rounded-lg" placeholder={"Email"}/>
                <textarea className="border-black bg-gray-200 p-4 m-2 rounded-lg" placeholder={"Message"}/>
                <button className="bg-gray-500 text-white p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact