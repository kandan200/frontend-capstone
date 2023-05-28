import Nav from "./nav";
import logo from './logo.svg';

function Header() {
  return (
<headder>
<img src={logo} className="App-logo" alt="logo" />
    <Nav/>
</headder>
    );
}

export default Header;
