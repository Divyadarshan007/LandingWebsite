const MainHeader = () => {
    return (
        <header className="py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo d-flex gap-3 align-items-center">
                        <img src="/public/images/site_logo.svg" alt="" width={'10%'} />
                        <span >Collab</span>
                    </div>
                    <ul className="d-flex menus gap-4 m-0 p-0">
                        <li><a className="fs-5 fw-medium" href="">Home</a></li>
                        <li><a className="fs-5 fw-medium" href="">Courses</a></li>
                        <li><a className="fs-5 fw-medium" href="">Pages</a></li>
                        <li><a className="fs-5 fw-medium" href="">Blog</a></li>
                        <li><a className="fs-5 fw-medium" href="">Contact</a></li>
                    </ul>
                    <div className="d-flex gap-3">
                        <button className="btn border-dark border-2 px-4 fw-bold">Login</button>
                        <button className="btn btn-dark fw-bold px-4">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader