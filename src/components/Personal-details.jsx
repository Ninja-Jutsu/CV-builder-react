import React, { useState } from "react";

function MakeForm({ field, value, onChange, type }) {
    const [isValidated, setValidate] = useState(true)
    return (
        <header>
            <form action="#" className="emailForm">
                {isValidated ? (
                    <>  <div className="inputSection">
                        <div id={type + "Div"}>
                            <input
                                id={value}
                                type={type}
                                value={value}
                                onChange={onChange}
                                placeholder={field}
                            />
                        </div>
                        <button
                            onClick={() => setValidate(false)}>
                            Validate
                        </button>
                    </div>
                    </>
                ) : (
                    <div id="validated">

                        <button
                            onClick={() => setValidate(true)}>
                            Edit
                        </button>
                        <p>{field}: {value}</p>
                    </div>
                )}
            </form>
        </header>
    )
}


export default function DisplayForm() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [mobile, setMobile] = useState("")
    const [dateOfBirth, setBirth] = useState("")
    const [availability, setAvailability] = useState("")



    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleAddressChange(e) {
        setAddress(e.target.value)
    }
    function handleMobileChange(e) {
        setMobile(e.target.value)
    }
    function handleBirthChange(e) {
        setBirth(e.target.value)
    }
    function handleAvailabilityChange(e) {
        setAvailability(e.target.value)
    }

    return (
        <>
            <MakeForm
                field={'Email Address'}
                value={email}
                type={'email'}
                onChange={handleEmailChange}
            />
            <MakeForm
                field={'Name'}
                value={name}
                type={'text'}
                onChange={handleNameChange}
            />
            <MakeForm
                field={'Phone Number'}
                value={mobile}
                type={'text'}
                onChange={handleMobileChange}
            />
            <MakeForm
                field={'Home Address'}
                value={address}
                type={'text'}
                onChange={handleAddressChange}
            />
            <MakeForm
                field={'Date of Birth'}
                value={dateOfBirth}
                type={'text'}
                onChange={handleBirthChange}
            />
            <MakeForm
                field={'Availability'}
                value={availability}
                type={'text'}
                onChange={handleAvailabilityChange}
            />
        </>
    )
}

