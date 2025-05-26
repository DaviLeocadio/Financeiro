import crypto from 'crypto';
function generateSecretKey() {
  return crypto.randomBytes(64).toString('hex');
  }
  
const secretKey = generateSecretKey();
const JWT_SECRET = secretKey;
export { JWT_SECRET };


