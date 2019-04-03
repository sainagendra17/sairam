import React from 'react';

const Gallery = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="flex-container">
                    <div className="">
                        <img className="img1" src={window.location.origin + '/images/Sai1.jpg'} alt="sai" />
                    </div>
                    <div className="">
                        <img className="img4" src={window.location.origin + '/images/Sai4.jpg'} alt="sai" />
                    </div>

                    <div className="">
                        <img className="img3" src={window.location.origin + '/images/Sai3.jpg'} alt="sai" />
                    </div>
                    <div className="">
                        <img className="" src={window.location.origin + '/images/Sai2.jpg'} alt="sai" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Gallery;