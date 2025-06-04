const MainHeader = () => {
    return (
        <header className="py-4">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="logo">
                        <img src="/public/images/logo.png" alt="" width={'40%'} />
                    </div>
                    <ul className="d-flex menus gap-4">
                        <li><a className="fs-5 fw-medium" href="">Home</a></li>
                        <li><a className="fs-5 fw-medium" href="">About</a></li>
                        <li><a className="fs-5 fw-medium" href="">Blog</a></li>
                        <li><a className="fs-5 fw-medium" href="">Portfolio</a></li>
                        <li><a className="fs-5 fw-medium" href="">Pricing</a></li>
                        <li><a className="fs-5 fw-medium" href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default MainHeader