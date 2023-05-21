function  wordcount(string)
{
    const worlds=string.split("")
    const countmap=new Map()

    for(let word of worlds)
    {
        if(countmap.has(word))
        {
            countmap.set(word,countmap.get(word)+1);
        }
        else{
            countmap.set(word,1);
        }
    }
    return countmap;
}

const text="This is a sample string. This string contains multiple words, some of which may repeat."
const result=wordcount(text);
console.log(result);