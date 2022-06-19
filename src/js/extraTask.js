/** Add phone number
 * @param {string} phoneNumber
 * @return {string} formatted phone number
 */
export default function formatPhoneNumber(phoneNumber) {
  console.log(phoneNumber.includes('+'));
  if (!phoneNumber.includes('+')) {
    return phoneNumber.replace(/^8/, '+7').replace(/[\s\(\)\-]/g, '' );
  }
  return phoneNumber.replace(/[\s\(\)\-]/g, '' );
}
