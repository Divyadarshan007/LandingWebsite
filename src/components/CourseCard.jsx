const CourseCard = ({image, field, price, desc}) => {
    return (
        <div className="col-4">
            <div className="courseCard">
                <div className="courseCardImg">
                    <img src={image} width={'100%'} alt="" />
                </div>
                <div className="py-4">
                    <div className="d-flex">
                        <h4 className="px-3 py-1">{field}</h4>
                        <span>
                            ${price}
                        </span>
                    </div>
                    <div>
                        <span>Beginner</span>
                        <span>120 Hours</span>
                        <span>3.5 (3k Reviews)</span>
                    </div>
                    <p>{desc}</p>
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