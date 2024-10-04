const Contact = () => {
    return(
        <div>
            <h1 className={"font-bold text-3xl p-4 m-4"}>Contact us</h1>
            <form >
                <input type="text" className="border-black bg-gray-200 p-4 m-2 rounded-lg" placeholder={"name"}/>
                <input type="text" className="border-black  bg-gray-200 p-4 m-2 rounded-lg" placeholder={"message"}/>
                <button className="bg-gray-500 text-white p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact