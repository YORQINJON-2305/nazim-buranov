import "./about-author.css";
import AuthorImg from "../../assets/images/author-img.jpg";
import SecondAuthorImg from "../../assets/images/author-img-2.jpg";
import ThirdAuthorImg from "../../assets/images/author-img-3.jpg";
import FourthAuthorImg from "../../assets/images/author-img-4.jpg";
import FifthAuthorImg from "../../assets/images/nazim.jpg";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const AboutAuthor = () => {
  return (
    <div className="about-author-wrap">
      <div className="about-author-inner">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="author-swiper">
          <SwiperSlide style={{ background: "transparent" }}>
            <img
              className="about-author-img"
              src={FourthAuthorImg}
              alt="Author img"
            />
          </SwiperSlide>
          <SwiperSlide style={{ background: "transparent" }}>
            <img
              className="about-author-img"
              src={AuthorImg}
              alt="Author img"
            />
          </SwiperSlide>
          <SwiperSlide style={{ background: "transparent" }}>
            <img
              className="about-author-img"
              src={FifthAuthorImg}
              alt="Author img"
            />
          </SwiperSlide>
        </Swiper>
        <h2 className="about-author-title">Muallif haqida</h2>
        <div className="about-author-descr-wrap">
          <p className="about-author-descr">
            Bo‘ronov Nazim Mustafaqulovich 1994-yil 17-noyabrda Toshkent
            viloyati Bo‘ka tumanida tug‘ilgan. Millati o‘zbek. Bo'ronov Nazim
            100 dan ortiq respublika va xalqaro tanlovlar ishtrokchisi va
            g'olibi sanaladi. 2017-2021-yillarda O‘zDJTU xalqaro jurnalistika
            fakultetini imtiyozli diplomga tugatdi. Bo‘ronov Nazim
            Mustafaqulovich 2021-2023-yillarda Mirzo Ulug‘bek nomidagi
            O‘zbekiston Milliy universiteti Jurnalistika fakultetining,
            Televideniye va radioeshittirish yo‘nalishi magistraturasini
            imtiyozli diplomga tamomlab, doktaranturaga yo‘llanmani qo‘lga
            kiritdi. Bo‘ronov Nazim Mustafaqulovich shu paytgacha fakultet va
            universitetning o‘quv, ilmiy-tadqiqot, ma’naviy-ma’rifiy
            jarayonlarida faol ishtirok etib, o‘zining ilmiy tafakkuri,
            ziyrakligi, ijodiy iste’dodi hamda yuksak madaniyati,
            tashabbuskorligi bilan iqtidorli talabalar safida alohida o‘ringa
            ega bo‘ldi.
            {"\n"}
            {"\n"}
            2020-yilda O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim
            vazirligi huzuridagi Oliy ta’limni rivojlantirish tadqiqotlari va
            ilg‘or texnologiyalarni tatbiq etish markazi tomonidan pandemiya
            sharoitida respublika miqyosida “Onlayn eng yaxshi ilmiy maqola
            hamda innovatsion ixtirolar” tanlovini tashkil qilib vazirlikni
            maxsus tashakkurnomasiga sazovor bo‘ldi. MDH davlatlari o‘rtasida
            Qozog‘iston Respublikasida bo‘lib o‘tgan “Eng yaxshi yosh olim-2020”
            xalqaro tanlovida I- o‘rin, maxsus diplom hamda medalni qo‘lga
            kiritdi.
            <img
              className="other-about-author-img"
              src={SecondAuthorImg}
              alt="Second author img"
            />
            {"\n"}
            2020-yilda O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim
            vazirligi huzuridagi Oliy ta’limni rivojlantirish tadqiqotlari va
            ilg‘or texnologiyalarni tatbiq etish markazi tomonidan pandemiya
            sharoitida respublika miqyosida “Eng yaxshi audio ijodkori”
            tanlovini tashkil qilib vazirlik tomonidan maxsus diplom bilan
            taqdirlandi.
            {"\n"}
            2020-yilda “Axborotlashgan jamiyatda konstruktiv-psixologik
            xavfsizlikni ta’minlash asoslari” ilmiy monografiyasi chop etildi.
            {"\n"}
            2020-yilda O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim
            vazirligi huzuridagi Ma’naviyat va ma’rifat markazi tomonidan
            talabalar o‘rtasida e’lon qilingan ilmiy-ma’rifiy maqolalar
            respublika tanlovida I- o‘rinni qo‘lga kiritdi.
            {"\n"}
            2020-yilda Ozarbayjon Respublikasining O‘zbekistondagi elchixonasi
            tomonidan respublika jurnalistlari uchun o‘tkazilgan “O‘zbekiston -
            Ozarbayjon munosabatlarini eng yaxshi yoritgan jurnalist”
            nominatsiyasida I- o‘rinni egalladi.
            {"\n"}
            2021-yilda Bo‘ronov Nazim Mustafaqulovich Qozog‘iston Respublikasida
            «Jahon iste’dotlari» xalqaro uyushmasi tomonidan o’tkazilgan Abay
            ijodiga bag‘ishlangan xalqaro adabiy tanlovda medal bilan
            taqdirlandi. Hamda 2021-yilda esa uyushma a’zoligiga qabul qilindi.
            {"\n"}
            2021-yilda Qirg‘iziston Respublikasida faoliyat olib borayotgan
            “Qirg‘iz shoir-yozuvchilari jamoat fondi” a’zoligiga qabul qilindi
            va Markaziy Osiyo mintaqasi ijodkor yoshlari safiga kirdi.
            {"\n"}
            2021-yilda Misr Arab Respublikasida o‘tkazilgan xalqaro adabiy
            anjumanda “Taghrid Fayad” nomidagi adabiy mukofot ta’sis
            qo‘mitasining maxsus diplomi bilan taqdirlandi.
            {"\n"}
            2021-yilda M.V.Lomonosov nomidagi Moskva davlat unversiteti Toshkent
            filiali tomonidan o‘tkazilgan xalqaro konferensiyada onlayn ma’ruza
            qilib doktorant va magistrant talabalari orasida faxrli II o‘rinni
            qo‘lga kiritdi.
            {"\n"}
            2022-yilda turkiy davlatlar jurnalistlari uchun TURKSOY Xalqaro
            tashkiloti tomonidan ta’sis etilgan “TURKSOY xalqaro media
            mukofoti"ga sazovor bo‘ldi.
            {"\n"}
            2022-yil, 5-dekabrda Raqamli texnologiyalar vaziri Sherzod Shermatov
            tomonidan “O‘zbekiston Konstitutsiyasining 30 yilligi” esdalik
            nishoni bilan taqdirlandi.
            {"\n"}
            2022-yil, 15-dekabrda Prezident davlat stipendiyasi Respublika
            bosqichida faol ishtrok etib rag‘batlantruvchi sertifikat bilan
            taqdirlandi.
            {"\n"}
            2023-yil, “O‘zbekiston media makonida feyk va dezinformatsiyaga
            qarshi kurashishda mediasavodxonlikning o‘rni” mavzusida ilmiy
            monografiyasi chop etildi.
            <img
              className="other-about-author-img"
              src={ThirdAuthorImg}
              alt="Third author img"
            />
            {"\n"}
            Bo‘ronov Nazim Mustafaqulovich Respublikada o‘tkazilgan ko‘plab
            ilmiy-amaliy konferensiyalar va turli mavzudagi ma’naviy-ma’rifiy
            tadbirlarda o‘zining sermazmun ma’ruzalari bilan faol ishtirok etib
            kelmoqda. Shuningdek, 100 dan ortiq ilmiy maqola va tezislari O‘zR
            VM qoshidagi OAK ro‘yxatiga kirgan jurnallar, anjuman to‘plamlarida
            shuningdek, Rossiya, Qozog‘iston, Germaniya, Belarusiya, Ukraina,
            Hindiston, Bolgariya, Chexiya, Islandiya, Niderlandiya, Polsha,
            Ozarbayjon, AQSH, Buyuk Britaniya va boshqa davlatlarda o‘tkazilgan
            ilmiy-amaliy anjumanlarda o‘zining innovatsion va ilmiy g‘oyalari
            bilan faol ishtirok etib kelmoqda. Bo‘ronov Nazim Mustafaqulovich
            erishgan yutuqlarida O‘zbekiston Respublikasida xizmat ko‘rsatgan
            yoshlar murabbiysi, «Oltin qalam» mukofoti sohibi Saydi Umirov,
            filologiya fanlari doktori, professor Yoqutxon Mamatova, Oliy
            ta'lim, fan va innovatsiyalar vazirligi huzuridagi Talaba va
            o‘quvchilarning maʼnaviy yuksalishiga ko‘maklashish markazi
            jurnalisti Nargiza Dusimbetova, Prezident huzuridagi Davlat
            boshqaruvi akademiyasi hamda O‘zDJTU tarix fani o‘qituvchisi tarix
            fanlari nomzodi Oltinoy Masaliyeva, O‘zDJTU Xalqaro jurnalistika
            fakulteti o‘qituvchisi Feruza To‘rayeva, Xakimov Zafar
            Tulyaganovich, texnika fanlari doktori (DSS), Toshkent
            kimyo-texnologiya instituti Yangier filiali direktori va boshqa
            ustozlarining hissasi katta. Tengdoshlari orasida o‘zining na’munali
            xulqi, kamtarligi, tashabbuskorligi, namunali odob-ahloqi va jamoat
            ishlarida faolligi, noyob innovatsiyon g‘oyalarni generatsiya
            qilishi bilan bilan ajralib turadi. Uning g‘oyalari va
            tashabbuskorligi O‘zbekiston Respublikasi Ekologiya va atrof muhitni
            muhofaza qilish qo‘mitasi, Oliy va o‘rta-maxsus ta’lim vazirligi,
            O‘zbekiston Xalqaro huquq assosiasiyasi, YUNISEF, Ozarbayjon,
            Turkiya madaniyat markazlari, Toshkent shahar Ichki ishlar Bosh
            boshqarmasi, O‘zbekiston mustaqil bosma OAV va axborot agentliklari
            qo‘llab-quvvatlash va rivojlantirish fondi, O‘zbekiston Yoshlar
            Ittifoqi, O‘zbekiston Yoshlar ishlar agentligi, O‘zbekiston
            Jurnalistlarni qayta tayyorlash markazi, Respublika yosh ijodkorlar
            kengashi, O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim
            vazirligi huzuridagi Oliy ta’limni rivojlantirish tadqiqotlari va
            ilg‘or texnologiyalarni tatbiq etish markazi, O‘zbekiston
            Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi huzuridagi
            Ma’naviyat va ma’rifat markazi, “Yoshlar media markazi” NTT kabi
            tashkilotlar tomonidan bir qator “Faxriy yorliq”lar, diplom va
            sertifikatlar bilan taqdirlanib kelmoqda. Bugungi kunda Nazim
            Bo‘ronov ustozi filologiya fanlari doktori, professor Yoqutxon
            Mamatova rahbarligida ilmiy tadqiqotini davom ettirmoqda.
          </p>
        </div>
        <div className="about-author-back-btn-wrap">
          <Button
            className="back-btn"
            variant="outlined"
            onClick={() => window.history.back()}>
            <TiArrowBack style={{ fontSize: "25px" }} />
            Orqaga
          </Button>
        </div>
      </div>
    </div>
  );
};
