import PageTop from "../components/PageTop/PageTop";
import ListResource from "../components/ListResource/ListResource";

import slaidIcon from "../assets/icons/slide.svg";

import slaidlar from "../resource/slaidlar";

export default function Slaidlar() {
  return (
    <>
      <PageTop wrapStyle="mb-15 flex items-center flex-col text-white capitalize font-bold py-20 max-md:py-10 max-md:mb-10">
        <h2 className="text-8xl max-md:text-3xl">Taqdimotlar</h2>
      </PageTop>
      <ListResource resource={slaidlar} img={slaidIcon} />
    </>
  );
}
