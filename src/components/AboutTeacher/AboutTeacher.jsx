import { useState } from "react";

import Wrapper from "../Wrapper/Wrapper";

import teacherImage from "../../assets/teacher.jpg";

export default function AboutTeacher() {
  return (
    <section className="mb-15">
      <Wrapper className="flex items-center justify-between gap-10 max-md:flex-col-reverse ">
        <div className="flex flex-col gap-5 max-w-[700px] text-[#0800FF]">
          <h3 className="text-xl font-semibold">
            Toyirov Shohboz Ziyodullo o‘g‘li
          </h3>
          <div className="h-[1px] bg-black"></div>
          <p className="select-none">
            Oliy ma’lumotga ega bo‘lib, magistr ilmiy darajasini olgan. U ingliz
            va rus tillarini biladi. 2013–2016 yillarda Qarshi shahridagi
            Nuriston Akademik litseyida tahsil olgan. 2017–2021 yillarda Qarshi
            Davlat Universitetining talabasi bo‘lgan. 2021–2023 yillarda Qarshi
            Muhandislik va Iqtisodiyot Institutida magistratura bosqichida
            tahsil olgan. Shu davr mobaynida, 2021–2023 yillarda “Premium Meat
            Product” MCHJda operator lavozimida faoliyat yuritgan. 2022–2024
            yillarda Qarshi Muhandislik va Iqtisodiyot Institutining Moliya
            kafedrasida stajyor o‘qituvchi sifatida ishlagan. 2024-yil sentabr
            oyidan esa Iqtisodiyot va Pedagogika Universitetining Iqtisodiyot
            kafedrasida assistent lavozimida faoliyat yuritmoqda.
          </p>
        </div>
        <div className="max-w-2xs w-full max-md:w-[150px] overflow-hidden rounded-2xl">
          <img src={teacherImage} alt="Teacher" className="w-full" />
        </div>
      </Wrapper>
    </section>
  );
}
