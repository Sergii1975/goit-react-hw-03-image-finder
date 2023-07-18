import { Btn } from './Button.styled'
import PropTypes from 'prop-types';

const Button = ({ onloadMore }) => {
    return (
        <Btn type="button"
            onClick={onloadMore}>Load more
        </Btn>
    )
};

Button.propTypes = {
    onloadMore: PropTypes.func.isRequired,
};

export default Button;