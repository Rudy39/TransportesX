import './Header.css';



const Header = (props) => {
    return (
        <header>
            <div className="holder">
               <img src="/images/logo.png" width="100" alt="logo transportes x"/>
               <h1>Transporte X</h1>
            </div>
        </header>
    );
}

export default Header;