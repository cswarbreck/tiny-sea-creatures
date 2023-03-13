"use strict";
exports.__esModule = true;
exports.formattedPhoneNumber = void 0;
var formattedPhoneNumber = function (phoneNumber) {
    var prefix = 'tel:+44';
    var formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    return prefix.concat(formattedPhoneNumber);
};
exports.formattedPhoneNumber = formattedPhoneNumber;
console.log((0, exports.formattedPhoneNumber)("020 1234 5678"));
