
const SmallCard = ({icon, title, desc }) => {

    return (
        <div className="col-6">
            <div className="small-card  p-4 shadow rounded-2">
                <div className="card-icon mb-3">
                    <img src={icon} alt="" width={'70%'}/>
                    
                </div>
                <h3 className="mb-3">{title}</h3>
                <p>{desc}</p>

            </div>
        </div>
    )
}

export default SmallCard