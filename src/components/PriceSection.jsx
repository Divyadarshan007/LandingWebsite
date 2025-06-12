import PriceCard from "./PriceCard"

const PriceSection = () => {

    let priceCard = [
        {
            plan:"Basic Plan",
            price:"50",
            validity:"per 3 month",
        },
        {
            plan:"Standard plan",
            price:"150",
            validity:"per 6 month",
        },
        {
            plan:"Premium Plan",
            price:"250",
            validity:"per 12 month",
        },
    ]
    return (
        <section>
            <div className="container">
                <div>
                    <h3>Premium Price Packages</h3>
                </div>
                <div className="row">
                    {priceCard.map((card)=>{
                        return <PriceCard plan={card.plan} price={card.price} validity={card.validity}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default PriceSection