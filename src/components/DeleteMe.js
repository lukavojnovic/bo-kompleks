import React, { Component } from 'react'

class DeleteMe extends Component{

    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            img: "",
            allMemeImg:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImg: memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    handleClick(event){
        event.preventDefault()
        let randomItem = this.state.allMemeImg[Math.floor(Math.random()*this.state.allMemeImg.length)].url;
        console.log(randomItem)
        this.setState(
            {
                img: randomItem
            }
        )
    }
    render(){
        return(
            <div>
                <h1 className="text-3xl text-center uppercase">{this.state.topText}</h1>
                <form className="meme-form w-1/2 mx-auto" onSubmit={this.handleClick}>
                    <label>
                        Upper Text
                        <input 
                        onChange={this.handleChange}
                        value={this.state.topText}
                        placeholder="Top text"
                        name="topText" 
                        type="text" 
                        id="upper-text" 
                        className="appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
                    </label>
                    <label>
                        Bottom Text
                        <input 
                        onChange={this.handleChange}
                        value={this.state.bottomText}
                        placeholder="Bottom text"
                        name="bottomText" 
                        type="text" 
                        id="bottomText" 
                        className="appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
                    </label>
                    <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Change image</button>
                </form>
                <div>
                    
                    <img src={this.state.img} alt=""/>
                </div>
            </div>
        )
    }
}

export default DeleteMe