const MentorSection = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="image-widget">
                            <img src="/public/images/about_image_2.jpg" width={'100%'} alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h3>Supporting Student Learning in Your Course</h3>
                            <p>Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Sit amet porttitor eget dolor morbi</p>
                            <ul class="info_list m-0 p-0">
                                <li><i class="fas fa-square"></i> <span>Learn in-demand skills with over 183,000 video courses</span></li>
                                <li><i class="fas fa-square"></i> <span>Choose courses taught by real-world experts</span></li>
                                <li><i class="fas fa-square"></i> <span>Learn at your own pace, with lifetime access on mobile and desktop</span></li>
                            </ul>
                            <div>
                                <button>Our Mentors</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MentorSection