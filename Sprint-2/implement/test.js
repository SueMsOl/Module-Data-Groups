let a = "you And me and You    !."
const newObject = (argument) => {
    let cleansed = argument.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase();
    let arrayed = cleansed.split(" ").filter(word => word.trim() !== "");;
    let ordered = arrayed.toSorted((a,b)=> a-b);
    return ordered.reduce((a,b)=>{
        a[b] = (a[b] || 0)+1;
        return a;
    },{})
}
console.log(newObject(a));