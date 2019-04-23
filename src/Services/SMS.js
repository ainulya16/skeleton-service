import WhispirSDK from 'whispir-node-sdk';

const whispirAPI = new WhispirSDK(
  process.env.WHISPIR_USERNAME,
  process.env.WHISPIR_PASSWORD,
  process.env.WHISPIR_API_KEY
);

const whispirSMS = params => {
  return new Promise((resolve, reject) => {
    whispirAPI
      .SMS(params)
      .send()
      .then(resolve, reject);
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
