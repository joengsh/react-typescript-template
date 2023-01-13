/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
module.exports = {
  dotenvFile: () => {
    const ENV_CONTEXT = process.env.ENV_CONTEXT;
    const NODE_ENV = process.env.NODE_ENV;
    const dotEnvBase = '.env';

    const dotenvFiles = [
      ENV_CONTEXT && NODE_ENV && `${dotEnvBase}.${ENV_CONTEXT}.${NODE_ENV}.local`,
      ENV_CONTEXT && NODE_ENV && `${dotEnvBase}.${ENV_CONTEXT}.${NODE_ENV}`,
      ENV_CONTEXT && NODE_ENV !== 'test' && `${dotEnvBase}.${ENV_CONTEXT}.local`,
      ENV_CONTEXT && `${dotEnvBase}.${ENV_CONTEXT}`,
      NODE_ENV && `${dotEnvBase}.${NODE_ENV}.local`,
      NODE_ENV && `${dotEnvBase}.${NODE_ENV}`,
      NODE_ENV !== 'test' && `${dotEnvBase}.local`,
      dotEnvBase,
    ]
      .filter(Boolean)
      .filter((path) => fs.existsSync(path));

    return dotenvFiles[0];
  },
};
