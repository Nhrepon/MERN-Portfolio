
import TopNavigationBar from '../components/navigation/TopNavigationBar.jsx';
import FooterComponent from '../components/footer/FooterComponent.jsx';
import {Toaster} from 'react-hot-toast';


const MasterLayout = (props) => {



    return (
        <div>
            <TopNavigationBar/>
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                {props.children}
            </div>
            <FooterComponent/>
            <Toaster position="top-center" />

        </div>
    );
};

export default MasterLayout;