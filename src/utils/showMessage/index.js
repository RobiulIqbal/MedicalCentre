import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showErr = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.erorrmassage,
    color: colors.white,
  });
};
export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.succesmassage,
    color: colors.white,
  });
};
