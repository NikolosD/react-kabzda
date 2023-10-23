import {useState} from "react";


export default{
    title:'useState demo'
}

export const Example1 = () => {
    console.log('Example 1')
    const [counter, setCounter] = useState(0)

    return(
        <>
            <button onClick={()=>{setCounter(prev=> prev+ 1)}}></button>
            {counter}
        </>

    )
}