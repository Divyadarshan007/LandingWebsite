import CourseCard from "./CourseCard"

const FilterSection = () => {
    let CourseCardArr = [
        {
            image: "/public/images/course_image_1.jpg",
            field: "COMPUTER SCIENCE",
            price: "29.99",
            desc: "Programming for everybody (Getting started with python)",
        },
        {
            image: "/public/images/course_image_2.jpg",
            field: "PHOTOGRAPHY",
            price: "9.99",
            desc: "Photography Masterclass: A Complete Guide to Photography",
        },
        {
            image: "/public/images/course_image_3.jpg",
            field: "BUSINESS",
            price: "Free",
            desc: "Project Management Principles and Practices",
        },
    ]
    return (
        <section className="py-5 mt-5">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h3 className="text-38 fw-bold w-35">Highest Rated Online Courses</h3>
                    <p className="text-16 text-end w-35">Dignissim enim sit amet venenatis urna cursus eget nunc. Egestas sed sed risus pretium quam vulputate</p>
                </div>
                <ul className="d-flex m-0 p-0 gap-4 filterMenu">
                    <li className="px-3 active d-flex align-items-center gap-2"><i className="fa-solid fa-people-group"></i>Hr</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i className="fa-solid fa-camera"></i>Photography</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i className="fa-solid fa-network-wired"></i>Programming</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i className="fa-solid fa-lightbulb"></i>Marketing</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i className="fa-solid fa-palette"></i>Design</li>
                </ul>

                <div className="row mt-5">
                    {CourseCardArr.map((item, idx)=>{
                        return <CourseCard key={idx} image={item.image} field={item.field} price={item.price} desc={item.desc} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default FilterSection