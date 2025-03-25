import PageTop from "../components/PageTop/PageTop";
import AboutTeacher from "../components/AboutTeacher/AboutTeacher";
import AboutScience from "../components/AboutScience/AboutScience";
import MainResource from "../components/MainResource/MainResource";
import Qushimcha from "../components/Qushumcha/Qushimcha";

export default function MainPage() {
  return (
    <>
      <PageTop className="mb-15">
        <AboutScience />
      </PageTop>
      <AboutTeacher />
      <MainResource />
      <Qushimcha />
    </>
  );
}
