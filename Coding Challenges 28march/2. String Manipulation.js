function manipulation(inputstring,callback)
{
    const manipulation=inputstring.toUpperCase();
    callback(manipulation);
}
function log(manipulation)
{
    console.log(`the manipulation is${manipulation}`);
}
manipulation("harshid patel",log)