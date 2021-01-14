import React, { Component } from 'react';

class ContactForm extends Component{

    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName: "",
            age:"",
            gender: "",
            location: "Bali",
            vegeterian: false,
            gluten: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
    const {value, name, type, checked} = event.target;
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault();
        alert(JSON.stringify(this.state))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input 
                    name="vegeterian"
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.vegeterian}
                    />
                    Vegeterian
                </label>
                <label>
                    <input 
                    name="gluten"
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.gluten}
                    />
                    Gluten
                </label>
                <input 
                classNameName="appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                type="text" 
                name="firstName" 
                value={this.state.firstName} 
                placeholder="First Name" 
                onChange={this.handleChange}
                />

                <input 
                classNameName="appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                type="text" 
                name="lastName" 
                value={this.state.lastName} 
                placeholder="Last Name" 
                onChange={this.handleChange}
                />

                <input 
                classNameName="appearance-none block bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                type="number" 
                name="age" 
                value={this.state.age} 
                placeholder="Age"
                min="1"
                max="120"
                onChange={this.handleChange}
                />
                
                <label>
                    <input
                        classNameName="ml-5"
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        classNameName="ml-5"
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />
                    Female
                </label>
                <br />
                <label>Location</label>
                <select
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                >
                    <option value="bali">Bali</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="cambodia">Cambodia</option>
                </select>

        <h1 classNameName="uppercase">{this.state.firstName}</h1>
                <button  classNameName="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Submit</button>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                    <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                    <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                    <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Send
                    </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
            </form>
        ) 
    }
}

export default ContactForm
