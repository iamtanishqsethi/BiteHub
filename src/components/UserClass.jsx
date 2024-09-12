import React from 'react';//need to import react to use React.Component

//class based user component
//a class based component is a normal javascript class that extends react component
class UserClass extends React.Component{
    //to receive and use props in class based components
    //we use constructors
    //when ever this class based component in encountered where it was imported
    //the first thing that is called when loading/mounting the component is the constructor
    //then  the render method
    constructor(props) {
        super(props)
        // console.log(props)
        //creating a state variable in a class based component
        this.state={
            // count:0,
            userInfo:{
                name:"John doe",
                twitter_username:"default",
                login:"default",
                avatar_url:"https://picsum.photos/200/300"
            }
        }
    }
    async componentDidMount(){
        //once this component is mounted/loaded on the web page then this method is called
        //component did mount is mainly used for api calls
        //this method is similar to useEffect()
        const data= await fetch("https://api.github.com/users/iamtanishqsethi")
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        // console.log(json)
    }
    render(){
        //this will return a piece of jsx
        const {name,twitter_username,login,avatar_url}=this.state.userInfo
        return(
            <div className="user-card">
                <img src={avatar_url} alt=""/>
                <h2>Name:{name} </h2>
                <h3>Contact: @{twitter_username}</h3>
                <h3>Github :{login}</h3>
                {/*<h1>Count:{this.state.count}</h1>*/}
                {/*<button onClick={()=>{*/}
                {/*    this.setState({*/}
                {/*        count:this.state.count+1*/}
                {/*    })*/}
                {/*}}>Count++</button>*/}
            </div>
        )
    }
}
export default UserClass;