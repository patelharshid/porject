const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const url1="http://www.example.com";
const url2="http://www.linkedin*463723883$&*^%$#.com";
const url3="http://www.linkedin~!@#$%^&*()QWERTYUIOPasdfghjkl.com";

if(regex.test(url1))
{
    console.log(url1+" is valid URL");
}else{
    console.log(url1+" is not valid URL");
}

if(regex.test(url2))
{
    console.log(url2+" is valid URL");
}else{
    console.log(url2+" is valid URL");
}


if(regex.test(url3))
{
    console.log(url3+" is valid URL");
}else{
    console.log(url3+" is valid URL");
}
