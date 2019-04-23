import { isMobilePhone } from 'validator';

export default params => {
  return new Promise((resolve, reject) => {
    const firstNotZero = number => /^0/.test(number);
    const { to, subject, body } = params;
    let recipients = to;
    if (!recipients || !subject || !body) {
      reject(new Error('Invalid parameters'));
    }
    if (!(recipients instanceof Array)) {
      recipients = [recipients];
    }
    if (recipients.length > 0 && typeof subject === 'string' && typeof body === 'string') {
      const isValidNumber = recipients.filter(
        number => number && isMobilePhone(number) && !firstNotZero(number)
      );
      const invalidNumber = recipients.filter(item => isValidNumber.indexOf(item) === -1);
      if (isValidNumber.length > 0) {
        const newParams = {
          to: isValidNumber,
          subject,
          body,
          invalidNumber: invalidNumber || []
        };
        resolve(newParams);
      } else if (isValidNumber.length === 0) {
        reject(new Error('Invalid phone number'));
      }
    } else {
      reject(new Error('To as recipient is empty or one of subject and body is not string'));
    }
  });
};
