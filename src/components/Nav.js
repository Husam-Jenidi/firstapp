const Nav = function(props) {
return (
    <nav className="main-nav">
        <ul>
            <li>{props.first}</li>
            <li>Articles</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
};
export default Nav;