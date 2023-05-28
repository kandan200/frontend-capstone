import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation } from "react-router-dom";

function Nav() {
  return (
<nav>                
    <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
    </ul>
    <li key={contact.id}>
                    <NavLink to={`contacts/${contact.id}`}
                        className={({ isActive, isPending })=>
                        isActive
                        ? 'active'
                        : isPending
                        ?'pending'
                        :''}
                    >
                        <Link to={`contacts/${contact.id}`}>
                            {contact.first || contact.last ? (
                            <>
                                {contact.first} {contact.last}
                            </>
                            ) : (
                            <i>No Name</i>
                            )}{" "}
                            {contact.favorite && <span>★</span>}
                        </Link>
                  </NavLink>
                </li>
</nav>
    );
}

export default Nav;
