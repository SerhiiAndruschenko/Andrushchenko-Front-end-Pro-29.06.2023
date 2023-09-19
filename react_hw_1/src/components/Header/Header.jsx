import './Header.css';
import logo from '../../logo.svg';

const Header = () => {


  return(
    <>
      <header>
        <div className='container'>
          <div className='header__inner'>
            <img src={logo} alt='logo' />
            <nav>
              <a href='/'>Home</a>
              <a href='/'>About us</a>
              <a href='/'>Solutions</a>
              <a href='/'>Contact Us</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;