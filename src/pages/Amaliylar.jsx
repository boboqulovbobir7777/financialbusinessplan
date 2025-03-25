import PageTop from "../components/PageTop/PageTop";
import ListResource from "../components/ListResource/ListResource";

import amaliyIcon from "../assets/icons/amaliy.svg";

import amaliylar from "../resource/amaliylar";

export default function Amaliylar() {
  return (
    <>
      <PageTop wrapStyle="mb-15 flex items-center flex-col text-white capitalize font-bold py-20 max-md:py-10 max-md:mb-10">
        <h2 className="text-8xl max-md:text-3xl">Amaliyotlar</h2>
      </PageTop>
      <ListResource resource={amaliylar} img={amaliyIcon} />
    </>
  );
}
