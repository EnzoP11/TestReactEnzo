import {useState} from 'react'

const Button = () => {

const [count, setCount] = useState(0)
const [isOpen, setIsOpen] = useState(false)
const [name, setName] = useState('')

const handleClick = () => {
    setCount(5)
}
return(
    <>
    
    <h1>Hello World : {count}</h1>
    <button onClick={handleClick}>+ 5</button>
    
    {isOpen ? <p>Welcome you can order what you want</p> : <p>Sorry we are close for the moment</p>}
    <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
    <br />
    {name}
    <form action="">
        <input type="text" onChange={e => console.log(e.target.value)} />
    </form>
    </>
)


}

export default Button