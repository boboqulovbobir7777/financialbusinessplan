import PageTop from "../components/PageTop/PageTop";
import ListResource from "../components/ListResource/ListResource";

import texnikXaritaIcon from "../assets/icons/amaliyYu.svg";

import texnikXarita from "../resource/texnikXarita";

export default function TexnikXaritalar() {
  return (
    <>
      <PageTop wrapStyle="mb-15 flex items-center flex-col text-white capitalize font-bold py-20 max-md:py-10 max-md:mb-10">
        <h2 className="text-8xl max-md:text-3xl text-center">
          Texnik xaritalar
        </h2>
      </PageTop>
      <ListResource resource={texnikXarita} img={texnikXaritaIcon} />
    </>
  );
}
