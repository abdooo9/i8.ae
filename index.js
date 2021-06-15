const fetch = require('node-fetch');


class i8 {
    constructor(options) {
        if (!options) throw new Error(`i8.ae Error: Api key has not been entered`);
        this.api = options
    }

    async short(url) {
        let data = await fetch(`https://i8.ae/api/url/add`, {
            method: 'POST',
            body: JSON.stringify({
                url: url,
            }),
            headers: {
                "Authorization": this.api,
                "Content-Type": "application/json"
            }
        }).then(json => json.json())
        if (data.error) {
            return false
        } else {
            return data
        }
    }

    async secure(url, pass) {
        if (!pass) throw new Error(`i8.ae Error: no password key has been entered`);
        let data = await fetch(`https://i8.ae/api/url/add`, {
            method: 'POST',
            body: JSON.stringify({
                url: url,
                password: pass
            }),
            headers: {
                "Authorization": this.api,
                "Content-Type": "application/json"
            }
        }).then(json => json.json())
        if (data.error) {
            return false
        } else {
            return data
        }
    }


}

module.exports = i8;
