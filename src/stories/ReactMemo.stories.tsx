import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'React.memo demo',
}
const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersType = { users: Array<string> }
const UsersSecret = (props: UsersType) => {
    console.log('USERS')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter,setCounter] = useState(0)
    const [users,setUsers] =useState(['NICK','JO','GURAM'])

    const addUser = () =>{
        const newUsers = [...users,'Sveta' + new Date().getTime().toString().slice(0,3)]
        setUsers(newUsers)
    }

    return<>
        <button onClick={()=> setCounter(prev=>prev + 1)}>Increment counter</button>
        <button onClick={()=> addUser()}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}





export const ExampleWithCallBack1 = () => {
    console.log('LikeUseCallBack')
    const [counter,setCounter] = useState(0)
    const [books,setBooks] =useState(['React','JS','HTML'])


    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().includes('a'));
    }, [books]);

    const addBook = () =>{
        const newBooks = [...books,'Angular'   + new Date().getTime().toString().slice(0,3)]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(()=>{return addBook},[books])
    const callBackAddBook = useCallback(()=>addBook(),[books])


    return<>
        <button onClick={()=> setCounter(prev=>prev + 1)}>Increment counter</button>
        <Books books={newArray} addBook={callBackAddBook}/>
    </>
}


type BookSecretPropsType = { books: Array<string>; addBook: ()=> void}
const BooksSecret = (props : BookSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={()=> props.addBook()}>Add Book</button>
        {props.books.map((b, i) => <div key ={i}>{b}</div>)}
    </div>
}

const Books = React.memo(BooksSecret  )

