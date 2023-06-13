import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../App';
import { ReactSession } from 'react-client-session';
export function Header(props) {
    const link = links();
    try {
        ReactSession.get("username")
    } catch (error) {
        ReactSession.set("username", "")
    }
    return <div className='navbar'>
        <div className='flex space-between'>
            <Link to={link.homeFull}><p>Home</p></Link>
            {ReactSession.get("username")?<><Link to={link.planning}><p>Planning</p></Link>
            <Link to={link.patients}><p>Patients</p></Link></>:<></>}
        </div>
    </div>


}