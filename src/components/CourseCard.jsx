const CourseCard = () => {
    return (
        <div className="col-4">
            <div className="courseCard">
                <div className="courseCardImg">
                    <img src="/public/images/course_image_1.jpg" width={'100%'} alt="" />
                </div>
                <div className="py-4">
                    <div className="d-flex">
                        <h4 className="bg-secondary px-3 py-1 text-white">COMPUTER SCIENCE</h4>
                        <span>
                            $29.99
                        </span>
                    </div>
                    <div>
                        <span>Beginner</span>
                        <span>120 Hours</span>
                        <span>3.5 (3k Reviews)</span>
                    </div>
                    <p>Programming for everybody (Getting started with python)</p>
                    <div>
                        <a href="">View Course</a>
                        <span><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard