interface evaporationConstants {
    content: number,
    evapPerDay: number,
    threshold: number
}

export const evaporator = ({content, evapPerDay, threshold}: evaporationConstants): number => {
    const thresholdInml: number = content * (threshold / 100);
    let days: number = 1;
    while(content > thresholdInml){
        days += 1;
        content = content * (evapPerDay/100);
    }
    return days;
}

const demoRates = {
    content: 10,
    evapPerDay: 10,
    threshold: 10
}

console.log(evaporator(demoRates))