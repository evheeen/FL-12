function isLeapYear(String) {
    let date = new Date(String);
    if (date instanceof Date && !isNaN(date)){
        let y = date.getFullYear();
        if (y % 4 === 0 && y %100 === 0 && y % 400 !==0){
            return y + ` is not a leap year`;
        } else if (y % 4 === 0){
            return y + ` is a leap year`;
        } else {
            return y + ` is not a leap year`;
        }
    } else {
        return `Invalid Date`
    }
}
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);