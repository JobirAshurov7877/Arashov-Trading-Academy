import './usefull.css'
import UsefullDetail from './usefullDetail'
import moneyImage from '../../images/money.png'
import airImage from '../../images/air.png'
import growthImage from '../../images/growthImage.png'
import BitcoinImage from '../../images/991959.png'

const Usefull = () => {
  return (
    <div style={{background:'#000b1d'}} className='usefull'>
      <div className="usefull__title">
          <h2 className='linear'>CRYPTO TRADER</h2>
          <h2> BO’LISHNING FOYDALI TOMONLARI:</h2>
      </div>
      <div className="usefull__body">
          <UsefullDetail img={moneyImage} title={'Katta pul topish imkoniyati '}  
          description={" Kriptovalyutalar narxi kuniga bir necha foizga o'zgarishi mumkin.Bu  esa treyderlarga katta  miqdorda  pul ishlash  imkonini  beradi."}/>

          <UsefullDetail img={airImage} title={"Erkinlik" } 
          description={"Kripto savdosi dunyoning istalgan nuqtasidan amalga oshirilishi mumkin. Bu  teyderlarga kunning istalgan vaqtida  va  istalgan joydan ishlash  imkonini  beradi"} />

          <UsefullDetail img={growthImage} title={"Savdolar soni bo’yicha cheklov yo’q"}
          description={"Kriptovalyutalar kechayu kunduz ishlaydi shuning uchun treyderlar  istalgan va  istalgan  hajmda  bitimlar tuzishlari mumkin"} />

          <UsefullDetail  img={BitcoinImage} title={"Kriptovalyutalarning katta tanlovi"}
               description={"Savdo uchun ishlatilishi mumkin bo'lgan ko'plab kriptovalyutalar mavjud. Bu  esa treyderlarga  o'z  sarmoyalari uchun eng  mos  variantlar tanlash  imkonini  beradi"}
          />
      </div>
    </div>
  )
}

export default Usefull
