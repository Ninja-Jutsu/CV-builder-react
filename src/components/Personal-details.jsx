import React, { useState } from "react";

export function MakeInput({ field, value, onChange, type}) {
    return (
        <div className={type + "Div"}>
            <input
                id={value}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={field}
            />
        </div>  
    )
}


export default function PersonalInfo() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [mobile, setMobile] = useState("")
    const [dateOfBirth, setBirth] = useState("")
    const [city, setCity] = useState("")

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleCountryChange(e) {
        setCountry(e.target.value)
    }
    function handleMobileChange(e) {
        setMobile(e.target.value)
    }
    function handleBirthChange(e) {
        setBirth(e.target.value)
    }
    function handleCityChange(e) {
        setCity(e.target.value)
    }

    return (
    <>
        <div id='personalInfoFiller' className="inputs">
            <MakeInput
                field={'Name'}
                value={name}
                type={'text'}
                onChange={handleNameChange}
            />
            <MakeInput
                field={'Email Address'}
                value={email}
                type={'email'}
                onChange={handleEmailChange}
            />
            <MakeInput
                field={'Phone Number'}
                value={mobile}
                type={'text'}
                onChange={handleMobileChange}
            />
            <MakeInput
                field={'Country'}
                value={country}
                type={'text'}
                onChange={handleCountryChange}
            />
            <MakeInput
                field={'Date of Birth'}
                value={dateOfBirth}
                type={'text'}
                onChange={handleBirthChange}
            />
            <MakeInput
                field={'City'}
                value={city}
                type={'text'}
                onChange={handleCityChange}
            />
        </div>
        <div id='personalInfoDisplay' className="display">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Mobile: {mobile}</p>
            <p>Country: {country}</p>
            <p>Date Of Birth: {dateOfBirth}</p>           
        </div>
    </>
    )
}
