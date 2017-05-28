import crypto from 'crypto';

export default class PasswordService {
  /**
   * generates random string of characters i.e salt
   * @function
   * @param {number} length - Length of the random string.
   */
  static genRandomString(length = 8) {
    return crypto.randomBytes(Math.ceil(length / 2))
      .toString('hex') /** convert to hexadecimal format */
      .slice(0, length); /** return required number of characters */
  }

  /**
   * hash password with sha512.
   * @function
   * @param {string} password - List of required fields.
   * @param {string} salt - Data to be validated.
   */
  static sha512(password, salt) {
    const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    const value = hash.digest('hex');
    return {
      salt: salt,
      passwordHash: value,
    };
  }

  /**
   * Generates result string to store into the database using SHA512
   * @function
   * @param {string} password - User's password to be hashed
   */
  static saltHashPassword(userpassword) {
    const identifier = 6; /** SHA512 identifier is 6 */
    const salt = this.genRandomString(); /** Salt length is up to 8 (default value) */
    const passwordData = this.sha512(userpassword, salt);
    /* Resulting string like $6$12345678$U6Yv5E1|Wn6mE... */
    return `$${identifier}$${passwordData.salt}$${passwordData.passwordHash}`;
  }

  /**
   * Check if password will match hashed
   * @function
   * @param {string} hash - Hashed password with salt
   * @param {string} password - User's password
   */
  static comparePassword(encryptedPass = '', password = '') {
    /* Since we're using only sha512, we don't need id */
    const [id, salt, hash] = encryptedPass.split('$').filter(v => !!v); // eslint-disable-line

    return (hash === this.sha512(password, salt).passwordHash);
  }
}
