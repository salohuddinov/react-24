import React from 'react'
// import Chart from '../../components/chart/Chart'
import Pecahrt from '../../components/pechart/Pecahrt'

const Admin = () => {
    return (
        <>
            <div className='container'>
                <div className="admin">
                    <div className="cart__wrapper">
                        {/* <div className="chart__item">
                            <Chart />
                        </div> */}
                        <div className="chart__item">
                            <Pecahrt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin