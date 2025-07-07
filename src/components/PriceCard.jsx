const PriceCard = ({ plan, validity, price, idx }) => {
    return (
        <div className="col-lg-4 col-12">
            <div className={`price-card ${idx % 2 != 0 ? "bg-dark" : "mt-3"}`}>
                <h3>{plan}</h3>
                <p><sup>$</sup>{price}</p>
                <p>{validity}</p>
                <hr />
                <div className="d-flex justify-content-center">
                    <ul className="m-0 p-0 ">
                        <li className="mb-2"><i className="fas fa-caret-right"></i> <span>All Video for 3 Months</span></li>
                        <li className="mb-2"><i className="fas fa-caret-right"></i> <span>Testing for 10 Courses</span></li>
                        <li className="mb-2"><i className="fas fa-caret-right"></i> <span>Checking 5 Homework</span></li>
                        <li className=""><i className="fas fa-caret-right"></i> <span>Mentor Consultation</span></li>
                    </ul>
                </div>
                <div className="btn_wrap pb-0">
                    <a className={`btn ${idx % 2 != 0 ? "bg-yellow" : ""} border_dark" href="#!`}>
                        <span><small>Grab Now</small> <small>Grab Now</small></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PriceCard