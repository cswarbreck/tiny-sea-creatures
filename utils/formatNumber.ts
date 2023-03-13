export const formattedPhoneNumber = (phoneNumber: string) => {
    const prefix = 'tel:+44';
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    return prefix.concat(formattedPhoneNumber);
  };
  

console.log(formattedPhoneNumber("020 1234 5678"));