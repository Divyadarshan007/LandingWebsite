import CourseCard from "./CourseCard"

const FilterSection = () => {
    return (
        <section className="py-5 mt-5">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h3 className="text-38 fw-bold w-35">Highest Rated Online Courses</h3>
                    <p className="text-16 text-end w-35">Dignissim enim sit amet venenatis urna cursus eget nunc. Egestas sed sed risus pretium quam vulputate</p>
                </div>
                <ul className="d-flex m-0 p-0 gap-4 filterMenu">
                    <li className="px-3 active d-flex align-items-center gap-2"><i class="fa-solid fa-people-group"></i>Hr</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i class="fa-solid fa-camera"></i>Photography</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i class="fa-solid fa-network-wired"></i>Programming</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i class="fa-solid fa-lightbulb"></i>Marketing</li>
                    <li className="px-3 d-flex align-items-center gap-2"><i class="fa-solid fa-palette"></i>Design</li>
                </ul>

                <div className="row mt-5">
                    <CourseCard />
                </div>
            </div>
        </section>
    )
}

export default FilterSection