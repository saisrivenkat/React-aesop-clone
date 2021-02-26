/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'



function sai() {
    return (
        <div className="container " style={{ paddingTop: '250px', paddingBottom: '100px' }}>
            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay={false}
                nav

                margin={30}
                stagePadding={10}

            >
                <div className="item">
                    <div className="">
                        <div className="card align-items-stretch" style={{ width: '18rem' }}>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/5s6HTZjGiKep7hIhMwxAUm/2731249575c34b2dcb76c5a8039ff14e/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Small_373x364px.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Product</h5>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/5s6HTZjGiKep7hIhMwxAUm/2731249575c34b2dcb76c5a8039ff14e/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Small_373x364px.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Product</h5>
                        </div>

                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/5s6HTZjGiKep7hIhMwxAUm/2731249575c34b2dcb76c5a8039ff14e/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Small_373x364px.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Product</h5>
                        </div>

                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/5s6HTZjGiKep7hIhMwxAUm/2731249575c34b2dcb76c5a8039ff14e/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Small_373x364px.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Product</h5>
                            </div>

                        </div>

                    </div>

                </div>
            </OwlCarousel>
        </div>
    );
}

export default sai;