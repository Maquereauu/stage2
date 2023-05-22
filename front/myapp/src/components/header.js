import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../App';
export function Header(props) {
    const link = links();
    return <div className='navbar'>
        <div className='flex space-between'>
            <Link to={link.homeFull}><p>salut</p></Link>
            <Link to={link.patients}><p>Patients</p></Link>
        </div>
    </div>


}