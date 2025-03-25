import PageTop from "../components/PageTop/PageTop";
import ListResource from "../components/ListResource/ListResource";

import tarqatmaMaterialIcon from "../assets/icons/glosary.svg";

import tarqatmaMaterial from "../resource/tarqatmaMaterial";

export default function TarqatmaMateriallar() {
  return (
    <>
      <PageTop wrapStyle="mb-15 flex items-center flex-col text-white capitalize font-bold py-20 max-md:py-10 max-md:mb-10">
        <h2 className="text-8xl max-md:text-3xl text-center">
          Tarqatma materiallar
        </h2>
      </PageTop>
      <ListResource resource={tarqatmaMaterial} img={tarqatmaMaterialIcon} />
    </>
  );
}
