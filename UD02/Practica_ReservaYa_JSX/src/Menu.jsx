export default function Menu() {
    return(
    <div className="container-fluid">
        <ul className="navbar-nav">
            <li class="nav-item" data-bs-theme="dark">
            <button className="btn-solid theme-secondary" data-bs-toggle="menu" aria-expanded="false">
                MENU
            </button>
            <div class="menu">
                <a className="menu-item" href="#">Action</a>
                <a className="menu-item" href="#">Another action</a>
                <a className="menu-item" href="#">Something else here</a>
            </div>
            </li>
        </ul>
  </div>
    )
}