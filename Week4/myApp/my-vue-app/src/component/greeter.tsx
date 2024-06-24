interface newPropsVal{
  name : string,
  count ?: number,
  age ?: number
}


export default function Greeter(props : newPropsVal){
    return <h2>{props.name}</h2>
}

export const Hello = () => {
    const msg = 'Hello'
    return <h3>{msg}</h3> 
} 

export const GetQuote = () => {
    return <h3>Be Happy Always!</h3>
} 

export function GetGreeting(user?: string): JSX.Element  {
    if (user) {
      return <h3>Hello {user}</h3>
    }
    return <h3>Hello stranger</h3>
  }


