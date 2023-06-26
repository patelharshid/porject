const books=[
    {
        title:"the gerst",
        author:"f.Scott Fitzgerald",
        year:1925,
    },
    {
        title:"To Kill a mockingbird",
        author:"harper lee",
        year:1960,
    },
    {
        title:"who are you?",
        author:"George orwell",
        year:1949,
    },
    {
        title:"pride and prejudice",
        author:"jane austen",
        year:1913,
    },
];
function log(title)
{
    title.sort();
    console.log(title.join(","))
}
function extra(books,call)
{
    const title=books.map((books)=>books.title);
    call(title);
}
extra(books.log)
