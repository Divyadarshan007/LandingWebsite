import { FaAndroid } from "react-icons/fa";
import SmallCard from "./SmallCard";

const Courses = () => {
    let cardContent = [
        {
            icon:"/public/images/course_image_1.jpg",
            title:"Knowlwdge",
            desc:"Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            icon:"/public/images/course_image_2.jpg",
            title:"Unlimited access",
            desc:"Libero nunc consequat interd varius sit amet mattis vulpute enim liquet sagittis"
        },
        {
            icon:"/public/images/course_image_3.jpg",
            title:"Practical Skills",
            desc:"Vulputate enim nulla aliquet porttitor lacus luctus accums. Cras sed felis eget velit"
        },
        {
            icon:"/public/images/course_image_4.jpg",
            title:"A cerificate",
            desc:"Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt"
        },
    ]
    return (
        <section className="py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about-content">
                            <h3>What to Expect from a Collab Course</h3>
                            <p>Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur</p>

                            <div className="about-image">
                                <img src="/public/images/about_image_1.jpg" width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <div className="d-flex justify-content-end">
                                <button className="btn border-2 border-dark px-5 py-3 fw-bold">Explore Courses</button>
                            </div>

                            <div className="row mt-4 gy-4">
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