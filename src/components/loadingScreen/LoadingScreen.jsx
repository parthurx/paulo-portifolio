import React from 'react';
import loadingGif from '../../assets/loading.gif'

const LoadingScreen = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <img src={loadingGif} alt="Loading - Gif" />

            </div>

        </div>
    )
};

export default LoadingScreen;