const mySum = (...value)=>{
    return value.reduce((a, b)=>a+b)
}




console.log(mySum(1,2,3,4,5));

const myArr = [1,2,5,7]
console.log(mySum(...myArr), "this is myArr");

const mySecondArr = [1,2,3,5,7,9,10]

const miltBy2 = (...value)=>{
    return value.map((value)=>value*2);

}

const aboveAvg = (...value)=>{
    const sum = value.reduce((a, b)=>a+b);
    const average = sum/value.length;
    const aboveAvg = value.filter((above)=>above>average);
    return aboveAvg
}

console.log(miltBy2(...mySecondArr), "this is miltply by 2")
console.log(aboveAvg(...mySecondArr), "this is above average")

module.exports = mySum


setTimeout(() => {
    console.log("Goodbye");
}, 3000);

const Employee = [{name:"iwatani", email:"penpenetai@icloud.com", department:"meat", startDate:"2022/06/27"}];

const Person = Employee.forEach((each)=>{
    delete each.department;
    delete each.startDate
})

console.log(Person, ";lkj")