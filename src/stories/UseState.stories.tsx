import {useMemo, useState} from "react";


export default{
    title:'useState demo'
}

function generateData(){
    console.log('generate data')
    return 123123
}

export const Example1 = () => {

    const initialState = useMemo(generateData,[])

    console.log('Example 1')
    const [counter, setCounter] = useState(generateData)

    return(
        <>
            <button onClick={()=>{setCounter(prev=> prev+ 1)}}>+</button>
            {counter}
            <button onClick={()=>{setCounter(counter + 1)}}>+ for second</button>
            {counter}
        </>

    )
}