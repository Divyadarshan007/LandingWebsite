
import SmallCard from "./SmallCard";

const Courses = () => {
    let cardContent = [
        {
            icon:"/images/icon_academic_cap.svg",
            title:"Knowlwdge",
            desc:"Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            icon:"/images/icon_physics.svg",
            title:"Unlimited access",
            desc:"Libero nunc consequat interd varius sit amet mattis vulpute enim liquet sagittis"
        },
        {
            icon:"/images/icon_communication.svg",
            title:"Practical Skills",
            desc:"Vulputate enim nulla aliquet porttitor lacus luctus accums. Cras sed felis eget velit"
        },
        {
            icon:"/images/icon_diploma.svg",
            title:"A cerificate",
            desc:"Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt"
        },
    ]
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <h3>What to Expect from a Collab Course</h3>
                            <p>Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur</p>

                            <div className="about-image">
                                <img src="/images/about_image_1.jpg" width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-lg-end justify-content-center order-lg-1 order-2 pt-lg-0 pt-4">
                                <a class="btn border_dark" href="course.html"><span><small>Explore Courses</small> <small>Explore Courses</small></span></a>
                            </div>

                            <div className="row mt-4 gy-4 order-lg-2 order-1">
                               {cardContent.map((item, idx)=>{
                                    return <SmallCard key={idx} icon={item.icon} title={item.title} desc={item.desc} />
                               })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses