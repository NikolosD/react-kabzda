import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    // console.log('Simple Example')

    useEffect(() => {
        console.log('everytime')
        document.title = counter.toString()
    },)
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('with first render and evry counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter},{fake}
        <button onClick={() => setCounter(counter + 1)}>c+</button>
        <button onClick={() => setFake(fake + 1)}>f+</button>
    </>
}
export const SetTimeoutExample = () => {
        const [data, setData] = useState(new Date())


        console.log('SetTimeoutExample');

        useEffect(() => {
            setInterval(() => {
                setData(new Date()); // Update the current date and time
            }, 1000);


        },[]);

        return (
            <>
                <p> Current Date: {data.toLocaleString()}</p>
            </>
        );
}