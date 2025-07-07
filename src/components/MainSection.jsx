const MainSection = () => {
    return (
        <section className="main-banner pb-5 mb-5">
            <div className="container">
                <div className="banner-image">
                    <div className="row gy-5">
                        <div className="col-lg-6 col-12">
                            <div className="text-lg-start text-center">
                                <span className="text-white ">Learning Excellence</span>
                                <h1 className="text-white">The Best Free Online Courses of All Time</h1>
                                <p className="text-white ">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat nulla pariatur</p>
                                <div className="d-flex gap-3 justify-content-lg-start justify-content-center align-items-center">
                                    <a class="btn btn_primary bg-yellow" href="course.html"><span><small>Explore Courses</small> <small>Explore Courses</small></span></a>
                                    <a class="btn btn_primary bg-yellow" href="course.html"><span><small>Watch Video</small> <small>Watch Video</small></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="image">
                                <img src="/public/images/hero_banner_img_1.jpg" className="rounded-3" width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection