function solution(my_string, overwrite_string, s) {
    const arr = Array.from(my_string)
    
    for (let i = 0 ; i < overwrite_string.length ; i += 1){
        arr[s  + i] = overwrite_string[i]
    }
    
    return arr.join('')
}