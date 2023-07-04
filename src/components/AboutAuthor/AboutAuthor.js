import "./about-author.css";
import AuthorImg from "../../assets/images/author-img.jpg";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";

export const AboutAuthor = () => {
  return (
    <div className='about-author-wrap'>
      <div className='container'>
        <div className='about-author-inner'>
          <img
            className='about-author-img'
            src={AuthorImg}
            alt='Author images'
          />
          <h2 className='about-author-title'>Muallif Xaqida</h2>
          <p className='about-author-descr'>
            Yangihayot tumanida, yer usti metrosining 14-bekati oldidagi 17 tup chinorning shoxlari va tomirlari kesilib, ekilgan o‘rnidan sug‘urib olindi va joyga o‘tqazish uchun olib ketildi. Bu o‘rinda metroning tasdiqlangan loyihasi bir necha yil oldin tayyor bo‘lgani, shunga asosan mas’ullar daraxtlarni kuzda, qishda yo bahorda ko‘chirmasdan, nega yozning jazirama kunlariga qoldirganini tushunib bo‘lmaydi.

            Botanika instituti bo‘lim boshlig‘i Atirgul Xolmirzayeva biz bilan suhbatda ko‘chirilgan daraxtlarning yashab ketish imkoniyati deyarli nolga tengligini aytdi. Shaharning bosh ekologi Farhod Dehqonov esa mas’uliyatni daraxt ko‘chiruvchi kompaniyaga yukladi. Uning aytishicha, kompaniya daraxtlarni o‘stirib berish majburiyatini olgan. Agar daraxtlar qurib qolsa, ko‘chiruvchilar buning uchun javobgarlikka tortiladi.
          </p>
          <div className='about-author-back-btn-wrap'>
            <Button
              className='back-btn'
              variant='outlined'
              onClick={() => window.history.back()}
            >
              <TiArrowBack style={{ fontSize: "25px" }} />
              Orqaga
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
