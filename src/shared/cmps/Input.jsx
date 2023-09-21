import React, {useEffect, useState} from "react";

const isValidation = (template, value) => {
    return (value == '' || template.test(value))
}

const Input = React.memo(({setErrors, id, value, handleChange, type='text', regexPattern={regexPattern}}) => {

    const [err, setErr] = useState()
    const isValid = isValidation(regexPattern, value)

    useEffect(() => {
        setErrors(prevErr => {
            const newError = new Set(prevErr)
            if (!isValid) newError.add(`wrong_${id}`)
            else newError.delete(`wrong_${id}`)
            return newError

        })
    }, [isValid])


    return (
        <div>
            <label htmlFor={id}>{id}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={handleChange}
                placeholder={id}
            />

            {
                !isValid && <span>Error</span>
            }
        </div>
    )
})

export default Input