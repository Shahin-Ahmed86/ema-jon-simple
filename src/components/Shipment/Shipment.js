import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [address, setAddress] = useState(' ');
    const [phone, setPhone] = useState(' ');
    const [error, setError] = useState(' ');
    // const navigate = useNavigate();

    const handleNamerBlur = event =>{
        setName(event.target.value);
    }
        
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const  handleCreateUser = event =>{
        event.preventDefault();
        
    }

    return (
     <div className='form-container'>
        <div>
            <h2 className='form-title'> Shipping Infor </h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Name</label>
                    <input onBlur={handleNamerBlur} type="text" name="name" id='name' required></input>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id='email' required></input>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id='address' required></input>
                </div>
                <div className="input-group">
                    <label htmlFor="phone"> Phone number</label>
                    <input onBlur={handlePhoneBlur} type="text" name="phone" id='' required></input>
                </div>
                
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
            
            
        </div>
     </div>
    );
};
export default Shipment;