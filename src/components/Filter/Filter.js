import PropTypes from 'prop-types';
import { Label, P, Input } from '../FormContacts/FormContacts-styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <P>Find contacts by name</P>
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
