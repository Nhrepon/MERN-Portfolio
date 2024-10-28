import React from 'react';
import TopNavigationBar from '../components/navigation/TopNavigationBar.jsx';
import FooterComponent from '../components/footer/FooterComponent.jsx';
import {Toaster} from 'react-hot-toast';


const MasterLayout = (props) => {



    return (
        <div className='body'>
            <TopNavigationBar/>
            {props.children}
            <FooterComponent/>
            <Toaster position="top-center" />
        </div>
    );
};

export default MasterLayout;