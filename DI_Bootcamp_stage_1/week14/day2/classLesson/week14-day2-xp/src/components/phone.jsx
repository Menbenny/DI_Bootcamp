import { useState } from 'react'

const Phone = (props) =>{
     const [myPhone, setMyPhone] = useState({
        brand: "samsung",
        model: "Galaxy s20",
        color: "Black",
        year: 2020
     });

     const changeColor = () => {
        const newPhone = {...myPhone, color:"blue"};
        setMyPhone(newPhone)
     }
     return (
        <>
        <h2>My Phone is {myPhone.brand}</h2>
        <p>
            it is {myPhone.color} {myPhone.model} from {myPhone.year}
        </p>
        <button onClick={()=>changeColor()}>Change color</button>
        </>
     );
};

export default Phone;