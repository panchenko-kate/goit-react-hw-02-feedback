import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
            <List>
            <li>
                <Btn type='button' onClick={onLeaveFeedback}>good</Btn>
            </li>
            <li>
                <Btn type='button' onClick={onLeaveFeedback}>neutral</Btn>
            </li>
            <li>
                <Btn type='button' onClick={onLeaveFeedback}>bad</Btn>
            </li>
            </List>
    )
};


FeedbackOptions.prototype = {
    onLeaveFeedback: PropTypes.func,
}