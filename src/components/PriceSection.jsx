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
        <section className="py-6  bg-f6">
            <div className="container">
                <div className="pricing-heading">
                    <h3>Premium Price Packages</h3>
                </div>
                <div className="row gy-4">
                    {priceCard.map((card,idx)=>{
                        return <PriceCard plan={card.plan} price={card.price} validity={card.validity} idx={idx}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default PriceSection