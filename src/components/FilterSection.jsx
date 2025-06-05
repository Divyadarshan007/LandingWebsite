const FilterSection = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h3>Highest Rated Online Courses</h3>
                    <p>Dignissim enim sit amet venenatis urna cursus eget nunc. Egestas sed sed risus pretium quam vulputate</p>
                </div>
                <ul className="d-flex gap-4 filterMenu">
                    <li><i class="fa-solid fa-people-group"></i>Hr</li>
                    <li><i class="fa-solid fa-camera"></i>Photography</li>
                    <li><i class="fa-solid fa-network-wired"></i>Programming</li>
                    <li><i class="fa-solid fa-lightbulb"></i>Marketing</li>
                    <li><i class="fa-solid fa-palette"></i>Design</li>
                </ul>
            </div>
        </section>
    )
}

export default FilterSection