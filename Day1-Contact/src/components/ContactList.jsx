import { useState } from "react";
import { Contact } from "./Contact";
import { ContactCard } from "./ContactCard";

const initState = [
    {
        id : 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/71kkMXAcLCL.png",
        name : "Chunmun",
        email : "Chunmun121@gmail",
        phone : "67348757827",

    },
    {
        id : 2,
        image: "https://m.media-amazon.com/images/I/71jMx59+L6L._SL1500_.jpg",
        name : "Chulbul",
        email : "Chulbul121@gmail",
        phone : "99385847573",

    }
];


export const ContactList = ()=>{
    const [contactList, setcontactList]= useState(initState);
    

    const handleClick = (image,name, email, phone )=>{
        setcontactList([
            ...contactList,
            {
                id: contactList[contactList.length -1].id+1,
                image: image,
                name : name,
                email : email,
                phone : phone
            }
        ])
    }


    const deleteById = (id)=>{
        setcontactList(contactList.filter((item)=>item.id !==id))
    }

    return (
        <div>
            <div>
            <h1>Contact List</h1>
            <Contact handleClick={handleClick}/>
            </div>
            <br />
            {contactList.map((item)=>(
                <div key={item.id}>
                    <ContactCard
                    id={item.id}
                    image = {item.image}
                    name={item.name}
                    email={item.email}
                    phone= {item.phone}
                    onDelete={deleteById}/>
                </div>
            ))}
        </div>
    )

}