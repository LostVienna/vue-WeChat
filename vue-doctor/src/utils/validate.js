// 验证用户名
export function isvalidateUsername(str){
    const valid_map = ['admin','editor'];
    return valid_map.indexOf(str.trim()) >= 0;

    
}
export function isvalidateEmail(){

}

// export default