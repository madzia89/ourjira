export const fetchLogger = (response) => {
    console.log(`fetchLogger ${response.url}`, response.status)
    const json = response.json()
    return json.then((jsonData) => {
        console.log(`fetchLogger ${response.url}`, jsonData)
        return jsonData
    })
}