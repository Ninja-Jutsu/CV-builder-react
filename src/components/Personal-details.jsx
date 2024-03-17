import React, { useState } from "react";

function MakeForm({ value, onChange, type }) {
    const [isValidated, setValidate] = useState(true)
    return (
        <form action="#" className="emailForm">
            {isValidated ? (
                <>
                    <div id={{ value } + "Div"}>
                        <input
                            id={value}
                            type={type}
                            value={value}
                            onChange={onChange}
                        />
                        <label htmlFor={value}>{type}</label>
                    </div>
                    <button
                        onClick={() => setValidate(false)}>
                        Validate
                    </button>
                </>
            ) : (
                <div>
                    <h2>{value}</h2>
                    <button
                        onClick={() => setValidate(true)}>
                        Edit
                    </button>
                </div>

            )}
        </form>
    )
}


export default function DisplayForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')


    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }
    return (
        <>
            <MakeForm
                value={email}
                type={'email'}
                onChange={handleEmailChange}
            />
            <MakeForm
                value={name}
                type={'text'}
                onChange={handleNameChange}
            />
        </>
    )
}

