// 7.1  Робота з обьектом
const healthyActivity = {
    title: "Yoga",
    place: "Indoor",
    time: 30,
    equipment: "Mat"
}

function getActivityInfo() {
    const info = {};
    for (const i in healthyActivity) {
        if (healthyActivity.hasOwnProperty(i)) {
            info[i] = healthyActivity[i];
        }
    }
    console.log(info);
    return info;
}
getActivityInfo()

function addNewProperty(key, value) {
    return healthyActivity[key] = value
}

addNewProperty("energy", 100)
getActivityInfo()

//7.2 Сума вартості послуг
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

function price() {
    let sum = 0;
    for (const i in services) {
        let eachPrice = parseInt(services[i].split(' ')[0]);
        sum += eachPrice
    }
    console.log(sum);
    return sum;
}

price()

services["Кава"] = "50 грн";

price()

function minPrice() {
    let minValue = Infinity;

    for (const i in services) {
        if (services.hasOwnProperty(i)) {
            const num = parseFloat(services[i].split(' ')[0]);
            if (num < minValue) {
                minValue = num;
            }
        }

    }
    console.log(minValue)
    return minValue
}

minPrice()

function maxPrice() {
    let maxValue = 0;

    for (const i in services) {
        if (services.hasOwnProperty(i)) {
            const num = parseFloat(services[i].split(' ')[0]);
            if (num > maxValue) {
                maxValue = num;
            }
        }

    }
    console.log(maxValue)
    return maxValue
}

maxPrice()