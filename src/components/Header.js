const Header = ({ title = "Default Header Title" }) => {
    return (
        <header className="bg-dark text-white">
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header;