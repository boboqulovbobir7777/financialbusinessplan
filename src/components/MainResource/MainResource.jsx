import { Link } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";

import slidIcon from "../../assets/icons/slide.svg";
import maruzaIcon from "../../assets/icons/maruza.svg";
import amaliyIcon from "../../assets/icons/amaliy.svg";
import mavzuSavolIcon from "../../assets/icons/mavzuSavol.svg";
import tarqatmaMaterialIcon from "../../assets/icons/glosary.svg";
import textnikXaritaIcon from '../../assets/icons/amaliyYu.svg'

export default function MainResource() {
  return (
    <section className="mb-25 " id="resource">
      <Wrapper className="text-center">
        <h3 className="text-3xl font-bold mb-10 text-orange-500">Manbalar</h3>
        <ul className="flex justify-around gap-5 flex-wrap text-[#0000ff]">
          <li className="flex items-center justify-center w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#0000ff]">
            <Link to="/maruzalar" className="flex flex-col items-center gap-2">
              <img src={maruzaIcon} width={50} alt="maruza matnlari" />
              <span className="font-bold text-lg/[100%]">Maruza matinlari</span>
            </Link>
          </li>
          <li className="flex items-center justify-center w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#0000ff]">
            <Link to="/amaliylar" className="flex flex-col items-center gap-2">
              <img src={amaliyIcon} width={50} alt="alaliyotlar" />
              <span className="font-bold text-lg/[100%]">Amaliyotlar</span>
            </Link>
          </li>
          <li className="flex items-center justify-center w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#0000ff]">
            <Link to="/slaidlar" className="flex flex-col items-center gap-2">
              <img src={slidIcon} width={50} alt="slaidlar" />
              <span className="font-bold text-lg/[100%]">Taqdimotlar</span>
            </Link>
          </li>
          <li className="flex items-center justify-center w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#0000ff]">
            <Link
              to="/mavzu_savol"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={mavzuSavolIcon}
                width={50}
                alt="mavzular buyicha savollar"
              />
              <span className="font-bold text-lg/[100%]">
                Mavzularga moslashtirilgan savollar
              </span>
            </Link>
          </li>
          <li className="flex items-center justify-center w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#0000ff]">
            <Link
              to="/tarqatma-material"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={tarqatmaMaterialIcon}
                width={50}
                alt="tarqatma materiallar"
              />
              <span className="font-bold text-lg/[100%]">
                Tarqatma materiallar
              </span>
            </Link>
          </li>
          <li className="flex items-center justify-center w-[140px] p-2 rounded-2xl duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_5px_#0000ff]">
            <Link
              to="/texnik-xarita"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={textnikXaritaIcon}
                width={50}
                alt="texnik xaritalar"
              />
              <span className="font-bold text-lg/[100%]">
                Texnik xaritalar
              </span>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
}
