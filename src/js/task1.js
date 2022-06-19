/** This class validates usernames */
export default class Validator {
  checkSympols = /^[\d\w_-]+$/i;
  checkStartEndSymbols = /^[^\d_-].*[^\d_-]$/;
  checkNumbersAmount = /(\d{4,})/;
  /** Method checks
   * @param {string} username and
   * @return {boolean} checking result */
  validateUsername(username) {
    if (this.checkSympols.test(username) &&
    this.checkStartEndSymbols.test(username) &&
    !this.checkNumbersAmount.test(username)) {
      return true;
    }
    return false;
  };
}
