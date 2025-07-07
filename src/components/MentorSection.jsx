const MentorSection = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6 col-12">
                        <div className="image-widget">
                            <img src="/images/about_image_2.jpg" width={'100%'} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 ps-4">
                        <div className="mentor-content">
                            <h3>Supporting Student Learning in Your Course</h3>
                            <p>Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Sit amet porttitor eget dolor morbi</p>
                            <ul class="info_list m-0 p-0">
                                <li className="mb-2"><i class="fas fa-square"></i> <span>Learn in-demand skills with over 183,000 video courses</span></li>
                                <li className="mb-2"><i class="fas fa-square"></i> <span>Choose courses taught by real-world experts</span></li>
                                <li><i class="fas fa-square"></i> <span>Learn at your own pace, with lifetime access on mobile and desktop</span></li>
                            </ul>
                            <div class="btn_wrap pb-0">
                                <a class="btn btn_dark" href="#">
                                    <span>
                                        <small>Our Mentors</small>
                                        <small>Our Mentors</small>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MentorSection