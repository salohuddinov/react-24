import React, { memo } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import flag from '../../images/flag.png'
const HeaderTop = () => {
    return (
        <>
            <div className="topbg">
                <div className="container">
                    <div className="headertop">
                        <div className="header__left">
                            <p className='header__left__p'>
                                <LocationOnOutlinedIcon className='header__left__p__icon' />
                                Shahar: <span className='header__left__p__span'>Toshken</span>
                            </p>
                            <p className='header__left__pp'>Topshirish punktlari</p>
                        </div>
                        <div className="header__center">
                            <p className="header__center__p">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
                        </div>
                        <div className="header__right">
                            <p className='header__right__sotuv'> Uzumda soting </p>
                            <p className='header__right__pp'> Savol javoblar </p>
                            <p className='header__right__pp'>Buyurtmalarim</p>
                            <div className="til">
                                <img className='flag' src={flag} alt="" />
                                <button>O'zbekcha</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(HeaderTop)