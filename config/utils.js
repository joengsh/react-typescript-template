/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
module.exports = {
  dotenvFile: () => {
    const BUILD_TARGET = process.env.BUILD_TARGET;
    const NODE_ENV = process.env.NODE_ENV;
    const dotEnvBase = '.env';

    const dotenvFiles = [
      BUILD_TARGET && NODE_ENV && `${dotEnvBase}.${BUILD_TARGET}.${NODE_ENV}.local`,
      BUILD_TARGET && NODE_ENV && `${dotEnvBase}.${BUILD_TARGET}.${NODE_ENV}`,
      BUILD_TARGET && NODE_ENV !== 'test' && `${dotEnvBase}.${BUILD_TARGET}.local`,
      BUILD_TARGET && `${dotEnvBase}.${BUILD_TARGET}`,
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
