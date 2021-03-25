const makeSecretPrintable = require('./make-secret-printable');

console.log(`CRITICAL: ${makeSecretPrintable(process.env.CRITICAL)}`);
