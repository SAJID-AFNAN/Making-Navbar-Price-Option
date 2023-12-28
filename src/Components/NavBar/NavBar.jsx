import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, name: 'NotFound', path: '*' }
    ];

    return (
        <nav className="text-black bg-yellow-600 p-6">
            <div onClick={() => setOpen(!open)} className="md:hidden text-xl" >
                {
                    open === true ? <RxCross1></RxCross1>
                        : <RiMenu2Fill className=" "></RiMenu2Fill>
                }

            </div>
            <ul className={`md:flex absolute bg-yellow-600 p-6 md:static duration-1000 
            ${open ? 'top-16':'-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;