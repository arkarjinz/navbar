import React, {useState} from 'react';
import {NAVLINKS} from '../constants/navlinks.js';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../redux/menuSlice.js";

function NavbarComponent() {

    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menuBar);


    const handleClick = () => {
        dispatch(toggleMenu());

    }

    const [isActive, setIsActive] = useState(false)
    const handleActive = (key) => {
        setIsActive(key)
    }

    return (
        <nav className="flex justify-between px-3 items-center py-7 bg-indigo-200">


            <img className="w-[50px] h-[50px] object-contain" src="../../public/images/css-logo.png" alt="logo"/>

            <ul className=" hidden sm:flex gap-8 mx-auto items-center text-md text-white">
                {NAVLINKS.map((link) => (
                    <li key={link.key}>
                        <NavLink
                            to={link.href}
                            onClick={() => handleActive(link.key)}
                            className={`${isActive === link.key ? 'bg-amber-500' : ''}`}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="lg:hidden ">
                <img src="/images/menu.svg" alt="menu" onClick={() => handleClick()}/>
            </div>
            {menu && (
                <ul className="lg:hidden flex flex-col gap-20 mx-auto flex-wrap items-center text-md text-white">
                    {NAVLINKS.map((link) => (
                        <li key={link.key}>
                            <NavLink
                                to={link.href}
                                onClick={() => handleActive(link.key)}
                                className={`${isActive === link.key ? 'bg-amber-500' : ''}`}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )

            }

        </nav>
    );
}

export default NavbarComponent;
