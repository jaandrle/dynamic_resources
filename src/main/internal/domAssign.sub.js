/**
 * This slighlty extended version of `Object.assign` (eg. proper assign of `dataset`).
 * @memberof dynamic_resources
 * @inner
 * @param {HTMLElement} target JS represantion of element (in this library typically `<script>`).
 * @param {link_properties|script_properties} source
 */
function domAssign(target, source){
    const keys= Object.keys(source);
    for(let i=0, key;( key= keys[i] ); i++){
        if(key!=="dataset"){
            target[key]= source[key];
        } else {
            Object.assign(target[key], source[key]);
        }
    }
    return target;
}