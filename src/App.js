import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomeFunction from "./settings"
import Header from "./components/header"
import { Picture } from "./components/picture/picture"

//test module
SomeFunction();

console.log(Calc(5, 5))

function Calc(a, b) {
    return a + b;
}



// function User(userName) {
//     this.userName = userName;
// }

// const user1 = new User("Gal")
// const user2 = new User("Adir")
// const user3 = new User("Silivia")



//this function can be used as Instance Element - custom tag
//functional component


// const defaultPicture = "https://musclecarevents.org/wp-content/uploads/2016/07/NoImageAvailable.jpg";


function App() {
    const image = <img height="100" width="100" src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    const users = [{ name: "gal" }, { name: "iatai" }, { name: "matan" }] //data json taht converts to jsx array
    const images = [image, image, image, image, image] //jsx type array
    const products = [{ name: "milk", price: 111 }, { name: "milk", price: 111 }]
    const carRentalStyle = { color: "green", backgroundColor: "yellow", fontWeight: 800 }
    return (
        <div className="App">
            <Picture picUrl={"https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
            <Header headerStyle={carRentalStyle} title="sss" defaultText="No Text Provided" />
            <ul>
                {users.map(user => { return <li> {user.name}</li> })}
            </ul>
            {images.map(image => image)}

            <h1> Hello react app </h1>
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>

                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
