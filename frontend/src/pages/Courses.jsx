import Courses from "../components/Courses";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import MainHeader from "../shared/navigation/MainHeader";
import PageHeader from "../shared/ui/PageHeader";

function CoursesPage() {
  return (
    <div>
      <MainHeader />
      <PageHeader
        title="Smarty Programs"
        // sub="Courses tailored for Every Stage at KIDZIN"
        sub=" Explore our engaging and educational programs designed to nurture your child's growth and curiosity."
        image="images/02.jpg"
      />
      <Courses hideHeading={true} />
      <Facilities />
      <Footer />
    </div>
  );
}

export default CoursesPage;
