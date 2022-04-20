import world from "../images/world.png"


export default function Navbar () {
    return (
        <header>
            <img src={world} className="logo" alt="icon of the world" />
            <h1>My Bucket List</h1>
        </header>
    )
}
