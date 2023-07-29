function last(listName){
    if(listName.length===0)
        return null;
   
    else
    return listName[listName.length-1]
}


let list1 = []
console.log(last(list1));


let list2 = [1,2,3,4,5,6,7,8,9,10]
console.log(last(list2));