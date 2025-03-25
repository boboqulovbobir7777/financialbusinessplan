import PageTop from "../components/PageTop/PageTop";
import ListResource from "../components/ListResource/ListResource";

import mavzuSavolIcon from "../assets/icons/mavzuSavol.svg";

import mavzuSavol from "../resource/mavzusavol";

export default function MavzuSavol() {
  return (
    <>
      <PageTop wrapStyle="mb-15 flex items-center flex-col text-white capitalize font-bold py-20 max-md:py-10 max-md:mb-10">
        <h2 className="text-8xl max-md:text-3xl text-center">
          Mavzularga mosalshtirilgan savollar
        </h2>
      </PageTop>
      <ListResource resource={mavzuSavol} img={mavzuSavolIcon} />
    </>
  );
}
