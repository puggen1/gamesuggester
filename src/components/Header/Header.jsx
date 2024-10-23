import {useState} from 'react';
import HeaderProfile from '../Profile/HeaderProfile';
import Navigation from '../Navigation';
import '../../assets/style/header.css';
import '../../assets/style/profile.css';
import {Link} from 'react-router-dom';
import SideNav from '../sideNav';

function Header({user}) {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
    <>
        <SideNav
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
        />

        <header>
            <Navigation setOpenDrawer={setOpenDrawer} />

            <Link
                className="logo"
                to="/"
            >
                Game Suggester
            </Link>

            <HeaderProfile user={user} />
        </header>
    </>
	);
}

export default Header;
