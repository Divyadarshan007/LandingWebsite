import Courses from "./components/Courses"
import FilterSection from "./components/filterSection"
import MainHeader from "./components/MainHeader"
import MainSection from "./components/MainSection"

const App = () => {
  return (
    <>
      <MainHeader />
      <MainSection/>
      <Courses/>
      <FilterSection/>
    </>
  )
}

export default App