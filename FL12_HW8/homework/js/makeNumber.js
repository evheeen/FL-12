function makeNumbre(String) {
    let numbers = ``;
    for (let i = 0; i < String.length; i++) {
        if (String[i] >= 0 || String[i] <=9){
            numbers += String[i];
        }
    }
    return numbers;
}
makeNumbre(`erer384jjjfd123`);
makeNumbre(`123098h76gfdd`);
makeNumbre(`ijifjgdj`);