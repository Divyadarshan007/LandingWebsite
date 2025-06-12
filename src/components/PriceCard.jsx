const PriceCard = ({plan, validity, price}) => {
    return (
        <div className="col-4">
            <div className="price-card">
                <h3>{plan}</h3>
                <p><sup>$</sup>{price}</p>
                <p>{validity}</p>
                <hr />
                <ul class="m-0 p-0 text-start">
                    <li><i class="fas fa-caret-right"></i> <span>All Video for 3 Months</span></li>
                    <li><i class="fas fa-caret-right"></i> <span>Testing for 10 Courses</span></li>
                    <li><i class="fas fa-caret-right"></i> <span>Checking 5 Homework</span></li>
                    <li><i class="fas fa-caret-right"></i> <span>Mentor Consultation</span></li>
                </ul>
                <div class="btn_wrap pb-0">
                    <a class="btn border_dark" href="#!">
                        <span><small>Grab Now</small> <small>Grab Now</small></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PriceCard