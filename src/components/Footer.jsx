import {Link} from "react-router-dom";
const Footer=()=>{
    return(
        <footer className={"flex flex-col items-center justify-center bg-zinc-900 p-4 bottom-0 mt-6 text-gray-400 font-medium"}>
            <h2 className={"text-xl p-2"}> © 2024 : Bite Hub</h2>
            <div className="flex  items-center justify-center">
                <Link  className={"px-2 text-lg font-medium transition ease-in-out hover:text-gray-200"} to={"/about"}>About</Link>
                <Link  className={"px-2 text-lg font-medium transition ease-in-out hover:text-gray-200"} to={"/contact"}>Contact</Link>
            </div>
            <div className="flex p-2 items-center justify-center">
                <a href="https://github.com/iamtanishqsethi" className="text-2xl px-2 transition ease-in-out hover:text-gray-200 hover:scale-125"><i
                    className="fab fa-github"></i></a>
                <a href="https://x.com/TanishqSethi13" className="text-2xl px-2 transition ease-in-out hover:text-gray-200 hover:scale-125"><i
                    className="fab fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/in/tanishq-sethi-229914259/" className="text-2xl px-2 transition ease-in-out hover:text-gray-200 hover:scale-125"><i
                    className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    )
}
export default Footer;