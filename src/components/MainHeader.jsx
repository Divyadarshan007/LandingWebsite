const MainHeader = () => {
    return (
        <header className="py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo d-flex gap-3 align-items-center">
                        <img src="/public/images/site_logo.svg" alt="" width={'10%'} />
                        <span >Collab</span>
                    </div>
                    <ul className="d-xl-flex d-none menus gap-4 m-0 p-0">
                        <li><a className="fs-5 fw-medium" href="">Home</a></li>
                        <li><a className="fs-5 fw-medium" href="">Courses</a></li>
                        <li><a className="fs-5 fw-medium" href="">Pages</a></li>
                        <li><a className="fs-5 fw-medium" href="">Blog</a></li>
                        <li><a className="fs-5 fw-medium" href="">Contact</a></li>
                    </ul>
                    <div className="d-xl-none d-flex">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="d-flex gap-3">
                        <a class="btn border_dark" href="login.html"><span><small>Login</small> <small>Login</small></span></a>
                        <a class="btn btn_dark" href="signup.html"><span><small>Sign Up</small> <small>Sign Up</small></span></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader