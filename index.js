// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
let element= Object.assign({}, driver, { [key]: value });
return element;
}
