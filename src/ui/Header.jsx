import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
    return (
        <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-400 p-4 uppercase sm:px-6">
            <Link to="/fast-pizza" className="tracking-widest">
                Fast Pizza Co.
            </Link>

            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header;
