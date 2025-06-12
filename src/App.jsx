import Courses from "./components/Courses"
import FilterSection from "./components/FilterSection"
import MainHeader from "./components/MainHeader"
import MainSection from "./components/MainSection"
import MentorSection from "./components/MentorSection"
import PriceSection from "./components/PriceSection"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <>
      <MainHeader />
      <MainSection />
      <Courses />
      <FilterSection />
      <MentorSection />
      <PriceSection />
      <Testimonial />
    </>
  )
}

export default App