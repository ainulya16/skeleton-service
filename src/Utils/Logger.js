/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
// eslint-disable-next-line import/prefer-default-export

export default (req, res, next) => {
  const oldSend = res.send;
  res.send = function() {
    const { statusCode } = res;
    const data = arguments[0];
    console.info(`[SMS-Service]: status code ${statusCode}, response: ${data}`);
    oldSend.apply(res, arguments);
  };
  next();
};
