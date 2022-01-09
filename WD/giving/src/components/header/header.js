import React from 'react'
import './header.css'
import { IoIosArrowBack } from 'react-icons/io'
import GivingLogo from '../logo/pictures/Giving-svg.svg';

const header = () => {
    return (
        <div className='header'>
        <div className='header-container'>
            <div className='icon-back'>
                <IoIosArrowBack size={30}/>
            </div>
            <div className='header-logo'>
                <img src={GivingLogo} style={{ height: 220, width: 220 }} alt="React Logo" />
            </div>
        </div>
        </div>
    );
};

export default header;