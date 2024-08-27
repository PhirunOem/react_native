const checkValidKeyInObjecta = (object:Object,key:string) =>{
    if (key.length ==0) return false
    if (object === undefined) return false
    const allKeys = Object.keys(object)
    if (allKeys.length == 0) return false;
    const isValidKey = allKeys.includes(key)
    return isValidKey;
}

export default checkValidKeyInObjecta;