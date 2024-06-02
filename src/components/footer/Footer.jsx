import React, { memo } from 'react'
import rasm1 from '../../images/footer1.png'
import rasm2 from '../../images/footer2.png'

function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="footer__card">
                        <h2>Biz haqimizda</h2>
                        <p>Topshirish punktlari</p>
                        <p>Vakansyalar</p>
                    </div>
                    <div className="footer__card">
                        <h2>Foydalanuvchilarga</h2>
                        <p>Biz bilan bog'lanish</p>
                        <p>Savol javob</p>
                    </div>
                    <div className="footer__card">
                        <h2>Tadbirkorlarga</h2>
                        <p>Uzumda soting</p>
                        <p>Sotuvchi kabinetiga kirish</p>
                    </div>
                    <div className="footer__card">
                        <h2>Ilova yuklab olish</h2>
                        <img src={rasm1} alt="" />
                        <h2>Uzum ichtimoi tarmoqlarda</h2>
                        <img src={rasm2} alt="" />
                    </div>
                </div>
                <h2 className='sior'>Maxfiylik kelishuvi Foydalanuvchi Kelishuvi</h2>
            </div>
        </>
    )
}

export default Footer