import CartWidget from '../CartWidget/CartWidget';
import'./navbar.css';

function NavBar (){
    return(
        <nav className='nav-header'>
            <h2 className="pageName">Como vernos</h2>
            
            <ul className='nav-menu'>
                <li><a className='productos-header' href="/">Abrigos</a></li>
                <li><a className='productos-header' href="/">Pantalones</a></li>
                <li><a className='productos-header' href="/">Zapatillas</a></li>
            </ul>

        <CartWidget/>

        </nav>

    )
}

export default NavBar;