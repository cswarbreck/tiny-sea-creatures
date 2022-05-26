"use strict";
exports.__esModule = true;
exports.evaporator = void 0;
// export function evaporator(content: number, evapPerDay: number, threshold: number): number {
//     const thresholdInml: number = content * (threshold / 100);
//     return thresholdInml;
//     let days: number = 1
//     while(content > thresholdInml){
//       days += 1
//       content = content * (evapPerDay /100)
//     }
//     return days;
//   }
var evaporator = function (_a) {
    var content = _a.content, evapPerDay = _a.evapPerDay, threshold = _a.threshold;
    var thresholdInml = content * (threshold / 100);
    var days = 1;
    while (content > thresholdInml) {
        days += 1;
        content = content * (evapPerDay / 100);
    }
    return days;
};
exports.evaporator = evaporator;
var demoRates = {
    content: 10,
    evapPerDay: 10,
    threshold: 10
};
console.log((0, exports.evaporator)(demoRates));
