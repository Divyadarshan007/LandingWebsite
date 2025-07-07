import { useState } from "react"

const MainHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="logo d-flex gap-3 align-items-center">
                        <img src="/images/site_logo.svg" alt="" width={'10%'} />
                        <span >Collab</span>
                    </div>
                    <ul className="d-xl-flex d-none menus gap-4 m-0 p-0">
                        <li><a className="fs-5 fw-medium" href="">Home</a></li>
                        <li><a className="fs-5 fw-medium" href="">Courses</a></li>
                        <li><a className="fs-5 fw-medium" href="">Pages</a></li>
                        <li><a className="fs-5 fw-medium" href="">Blog</a></li>
                        <li><a className="fs-5 fw-medium" href="">Contact</a></li>
                    </ul>
                    <div className="d-xl-none d-flex fs-4" onClick={() => setShowMenu(!showMenu)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="d-xl-flex d-none gap-3">
                        <a class="btn border_dark " href="login.html"><span><small>Login</small> <small>Login</small></span></a>
                        <a class="btn btn_dark" href="signup.html"><span><small>Sign Up</small> <small>Sign Up</small></span></a>
                    </div>

                </div>
                {
                    showMenu &&
                    <ul className={`position-absolute px-0 py-4 d-flex flex-column align-items-center z-99 bg-white w-100  start-0 m-0`}>
                        <li className="mb-2">Home</li>
                        <li className="mb-2">Courses</li>
                        <li className="mb-2">Pages</li>
                        <li className="mb-2">Blog</li>
                        <li className="mb-2">Contact</li>
                        <div className="d-flex d-xl-none pt-4 gap-3">
                            <a class="btn border_dark " href="login.html"><span><small>Login</small> <small>Login</small></span></a>
                            <a class="btn btn_dark" href="signup.html"><span><small>Sign Up</small> <small>Sign Up</small></span></a>
                        </div>
                    </ul>


                }
            </div>
        </header>
    )
}

export default MainHeader