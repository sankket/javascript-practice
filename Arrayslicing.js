function arrayElementsSlicing(array,num){
    if (array == null){
        return 0;
    }
    if(num == null){
        return array[0];
    }
    if(num < 0){
        return [];
    }
    return array.slice(0 , num)
};

alert(arrayElementsSlicing([1,2,3,4,5],3))
