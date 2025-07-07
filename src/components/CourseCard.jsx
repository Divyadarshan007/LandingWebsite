const CourseCard = ({image, field, price, desc}) => {
    return (
        <div className="col-4">
            <div className="courseCard">
                <div className="courseCardImg">
                    <img src={image} width={'100%'} alt="" />
                </div>
                <div className="py-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h4 className="px-3 py-1 m-0">{field}</h4>
                        <span className="price">
                            ${price}
                        </span>
                    </div>
                      <div className="d-flex align-items-center gap-2 catag">
                        <span className="d-flex align-items-center gap-1"><i class="fa-solid fa-chart-simple text-warning"></i>Beginner</span>
                        <span className="d-flex align-items-center gap-1"><i class="fa-solid fa-clock text-warning"></i>120 Hours</span>
                        <span className="d-flex align-items-center gap-1"><i class="fa-solid fa-star text-warning"></i>3.5 (3k Reviews)</span>
                    </div>
                    <p>{desc}</p>
                    <div className="view-btn d-flex gap-2 align-items-center">
                        <a href="">View Course</a>
                        <span><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard