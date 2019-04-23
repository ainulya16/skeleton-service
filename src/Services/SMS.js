const whispirSMS = params => {
  return new Promise(resolve => {
    console.log(params);
    /**
     *  Create your own function
     */
    resolve();
  });
};

// eslint-disable-next-line import/prefer-default-export
export const send = params => {
  const { to: recipients, invalidNumber } = params;
  const promises = recipients.map(number =>
    whispirSMS({ to: number, subject: params.subject, body: params.body })
  );
  return Promise.all(promises).then(() => {
    const response = {
      message: `SMS has been sent to ${recipients.toString()}`,
      data: {
        recipients,
        invalid_recipients: invalidNumber
      }
    };
    return response;
  });
};
