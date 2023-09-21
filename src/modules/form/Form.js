import {useCallback, useEffect, useState} from "react";
import Input from "../../shared/cmps/Input";


export const Calc = () => {

    const [tex, setTax] = useState({
        apartment: '0',
        car: '0'
    })

    const [errors, setErrors] = useState(new Set())

    useEffect(() => {
        console.log(tex)
    }, [tex])

    const calc = () => {
        if (errors.size) {
            console.log('smt wrong')
            return
        }
        const res = Object.values(tex).reduce((acc, current) => +acc + +current, 0)
        console.log(res.toFixed(2) + "CAD")
    }


    const handleChange = useCallback((e) => {
      const {value, name} = e.target
        setTax(prev => ({
            ...prev,
            [name]: value
        }))
    }, [])

    const propTax = Object.keys(tex)

    return (

        <div className='form'>
            {
                propTax.map((prop, idx) => (
                    <Input
                        id={prop}
                        value={tex[prop]}
                        handleChange={handleChange}
                        key={prop + idx}
                        type='string'
                        regexPattern ={/^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/}
                        setErrors={setErrors}
                    />
                ))
            }
            <button onClick={calc}>Click</button>
        </div>

    )
}