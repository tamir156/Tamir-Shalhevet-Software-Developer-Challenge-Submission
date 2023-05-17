function getOrdinal(n) {
    let ord = 'th';
  
    if (n % 10 === 1 && n % 100 !== 11)
    {
      ord = 'st';
    }
    else if (n % 10 === 2 && n % 100 !== 12)
    {
      ord = 'nd';
    }
    else if (n % 10 === 3 && n % 100 !== 13)
    {
      ord = 'rd';
    }
  
    return ord;
}


export default function secToDateString(sec){
    const d = (new Date((sec)*1000)).toString().split(' '); // creates new Date object 
    const ord = getOrdinal(Number(d[2])); // gets ordianl for day using utility function above
    const res = Number(d[2]) + ord + " " + d[1] + " " + d[3];
    return res;
}

