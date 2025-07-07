const Footer = () => {
    return (
        <footer className="py-6">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-12">
                        <div className="mb-4">
                            <img src="/images/site_logo_2.svg" width="50%" alt="" />
                        </div>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <div className="social-links">
                            <span><i className="fa-brands fa-facebook"></i></span>
                            <span><i className="fa-brands fa-youtube"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-12">
                        <div>
                            <h3>Links</h3>
                            <ul className="m-0 p-0">
                                <li className="mb-2">About</li>
                                <li className="mb-2">Courses</li>
                                <li className="mb-2">Mentors</li>
                                <li className="mb-2">Prices</li>
                                <li className="">Events</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-12">
                        <div>
                            <h3>Class</h3>
                            <ul className="m-0 p-0">
                                <li className="mb-2">Programming</li>
                                <li className="mb-2">Art & Design</li>
                                <li className="mb-2">Business</li>
                                <li className="mb-2">Engineering</li>
                                <li className="">Photography</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-12">
                        <div>
                            <h3>Support</h3>
                            <ul className="m-0 p-0">
                                <li className="mb-2">Help Center</li>
                                <li className="mb-2">FAQ</li>
                                <li className="mb-2">Contacts</li>
                                <li className="mb-2">Security</li>
                                <li className="">Private Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div>
                            <h3>Latest Posts</h3>
                            <div className="d-flex align-items-center  pb-lg-2 pb-4 gap-3">
                                <div className="width-100">
                                    <img src="/images/blog_small_img_1.jpg" alt="" />
                                </div>
                                <div>
                                    <p>See how Michale built a new life and career</p>
                                    <span>October 12, 2023</span>
                                </div>

                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="width-100">
                                    <img src="/images/blog_small_img_2.jpg" alt="" />
                                </div>
                                <div>
                                    <p>See how Michale built a new life and career</p>
                                    <span>October 12, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer