const regex=/^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[a-zA-Z]+$/;
const url1="http://www.example.com";
const url2="http://www.example@30.com";
const url3="http://www.example@57&0188*h.com";

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