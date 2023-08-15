const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Gaming Blog</h1>
            <div className="links">
                <a href="./">Home</a>
                <a href="./" style={{
                    color:"red",
                    background:"yellow",
                    borderRadius:"10px"
            
                }}>Blog</a>
                <a href="./">Team</a>
                <a href="./">About Us</a>
            </div>
        </nav>
    );
}

export default Navbar;