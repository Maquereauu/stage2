import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../App';
import { ReactSession } from 'react-client-session';
export default function Home(){
    const link = links();
    return <>
    <h1 className="title top stroke box">Bienvenue sur l'ide!</h1>
    {ReactSession.get("username")?<></>:<><Link to={link.login}><p>Se connecter</p></Link></>}
    </>
}