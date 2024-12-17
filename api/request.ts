type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
const queryObj2String = (queryObj: object) => {
    // 对象转为query字符串
    let resStr = '?'
    const objAttrArray = Object.entries(queryObj)
    objAttrArray.forEach(([key, value], index) => {

        if (index !== objAttrArray.length - 1) {
            resStr += key + '=' + value + '&';
        } else {
            resStr += key + '=' + value
        }

    })

    return resStr;

}
const request = async <T>(url: string, method?: Method, query?: object, body?: object) => {
    let queryStr = ''
    if (query) queryStr = queryObj2String(query);
    return fetch(`${url}${queryStr}`, {method: method, body: JSON.stringify(body)}).then(res => res.json()) as T
}
export default request;