/** This class validates usernames */
export default class Validator {
  regExp = /a/;
  /** Method checks
   * @param {string} username and
   * @return {boolean} checking result */
  validateUsername(username) {
    return this.regExp.test(username);
  };
}
