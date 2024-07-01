import { useNavigate } from 'react-router-dom'

export default function Aboutus() {
    const navigate = useNavigate();
   const handleClick = () =>{
        navigate('/home');
   }

  return (
    <div>
    <div>
       Welcome to About Us
    </div>
    <button onClick={handleClick}></button>
    </div>
  )
}
