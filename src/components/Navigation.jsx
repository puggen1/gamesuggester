import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Navigation({setOpenDrawer}) {
	return (
    <nav>
        <label
            className="navButton"
            onClick={() => {
					setOpenDrawer(true);
				}}
        >
            {' '}

            <FontAwesomeIcon icon={faBars} />

            {' '}
        </label>
    </nav>
	);
}

export default Navigation;
