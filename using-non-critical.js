const makeSecretPrintable = require('./make-secret-printable');

console.log(`NON_CRITICAL: ${makeSecretPrintable(process.env.NON_CRITICAL)}`);
