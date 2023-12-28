import PropTypes from 'prop-types';
import { GoCheckCircleFill } from "react-icons/go";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='text-left flex items-center'><GoCheckCircleFill className='mr-2 text-green-400'></GoCheckCircleFill>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;