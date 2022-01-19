/**
 * Takes a simple object and converts it in to a JSON displayed String.
 * 
 *  PARAMS: Object obj
 *  RETURN: String JSON (displayed)
 */
export default function ObjToJSON(obj){
    // Extracts the `keys` of an object and returns an array containing the `keys`
    let keys = Object.keys(obj)

    //Creates the displayed JSON string
    let JSONed = '{'
    for (let i = 0; i < keys.length; i++) {
        JSONed += `"${keys[i]}":"${obj[keys[i]]}"`
        if(!(i+1 == keys.length)) JSONed += ', '
    }
    JSONed += '}'

    return JSONed
}