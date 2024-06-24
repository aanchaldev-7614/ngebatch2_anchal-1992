export default function Greeter(){
    return <h2>Welcome to the React world</h2>
}

export const Hello = () => {
    const msg = 'Hello'
    return <h3>{msg}</h3> 
} 

export const GetQuote = () => {
    return <h1>Be Happy Always!</h1>
} 

function getGreeting(user?: string): JSX.Element  {
    if (user) {
      return <h1>Hello {user}</h1>
    }
    return <h1>Hello stranger</h1>
  }


