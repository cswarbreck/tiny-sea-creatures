export const evaporator = ({ content, evapPerDay, threshold }) => {
    const thresholdInml = content * (threshold / 100);
    let days = 1;
    while (content > thresholdInml) {
        days += 1;
        content = content * (evapPerDay / 100);
    }
    return days;
};
const demoRates = {
    content: 10,
    evapPerDay: 10,
    threshold: 10
};
console.log(evaporator(demoRates));
