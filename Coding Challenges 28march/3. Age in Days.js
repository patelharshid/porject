const person={
    firstname:"patel",
    lastname:"harshid",
    age:20,
};
function inday(person,callback)
{
    const fullname=`${person.firstname} ${person.lastname}`;
    const fianalage=person.age*365;
    callback(fullname,fianalage);
}
function callback(fullname,fianalage)
{
    console.log(`this person full name is ${fullname} and their age in day is${fianalage}`)
}
inday(person,callback)