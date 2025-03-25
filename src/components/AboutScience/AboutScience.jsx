import silabus from "../../resource/silabus";

export default function AboutScience() {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-white py-20">
      <h1 className="text-3xl font-semibold">Moliyaviy biznes reja</h1>
      <p className="max-w-[900px] text-xl max-[425px]:text-base select-none">
        Moliyaviy biznes-reja – bu kompaniyaning kelajakdagi daromadlari,
        xarajatlari, investitsiyalari va moliyaviy strategiyalarini
        ko‘rsatadigan hujjat. U investorlar, kreditorlar yoki biznes egalariga
        loyiha yoki kompaniyaning moliyaviy barqarorligini tushunishga yordam
        beradi. 
      </p>
      <a
        href={silabus}
        className="block p-[12px_40px] bg-[#23d59c] rounded-[25px] duration-300 min-md:hover:bg-[#ffee00] active:bg-[#00cbff]"
        target="_blank"
      >
        Silabus
      </a>
    </div>
  );
}
