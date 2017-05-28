import jwt from 'jsonwebtoken';

export const TOKEN_CONFIG = {
  KEY: 'P2y=uf.Keq!/+/RNW7Lu8v?#OOTB',
  expires: '1y',
  alg: 'HS256',
};

export default class TokenService {
  /**
   * Generate token from users data
   * @param {Object} - user's data
   * @returns {string} - encoded value, token
   */
  static generate(data) {
    return jwt.sign(data, TOKEN_CONFIG.KEY, {
      expiresIn: TOKEN_CONFIG.expires,
      algorithm: TOKEN_CONFIG.alg,
    });
  }

  /**
   * Decode given payload (usually, authorization field from request header)
   * @param {string} - string with token to decore
   * @returns {object|null} - object with users data
   */
  static decode(payload) {
    try {
      return jwt.verify(payload, TOKEN_CONFIG.KEY);
    } catch (e) {
      return null;
    }
  }
}
