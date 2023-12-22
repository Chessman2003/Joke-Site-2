const requestURL = //url

function sendRequest(method, url, body = null) {
    return fetch(url).then(onfulfilled: response => {
        return response.text()
    })
}
sendRequest(method:'GET', requestURL).then(onfulfilled: data => console.log(data)).catch(onrejected: err => console.log(err))