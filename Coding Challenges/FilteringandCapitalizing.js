const books = [
    {
        title:"To Kill a Mockingbird",
        author:"Harper Lee",
        year:1960
    },
    {
        title:"All the Light We Cannot See",
        author:"Anthony Doerr",
        year:2014
    },
    {
        title:"Wuthering Heights",
        author:" Emily Bronte",
        year:1847
    },
    {
        title:"Gone Girl",
        author:"Gillian Flynn",
        year:2012
    },
    {
        title:"The Fault in Our Stars",
        author:"John Green",
        year:2012
    }
];
const nameprint=books.filter(x=>x.year>=2010).map(i=>
    {
        return {
            title:i.title,
            author:i.author.toUpperCase(),
            year:i.year
        };
});
console.log(nameprint);