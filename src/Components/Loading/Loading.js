import React from 'react';
import { MoonLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <MoonLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;