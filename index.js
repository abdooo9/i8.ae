const fetch = require('node-fetch');


class i8 {
    constructor(options) {
        if (!options) throw new Error(`i8.ae Error: Api key has not been entered`);
        this.api = options
    }

    async short(url) {
        function isURL(str) {
            const pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i');
            return !!pattern.test(str);
        }
        const isURLL = isURL(url)
        if (isURLL === false) throw new Error(`i8.ae Error: Please enter a valid URL address`);

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
        function isURL(str) {
            const pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i');
            return !!pattern.test(str);
        }
        const isURLL = isURL(url)
        if (isURLL === false) throw new Error(`i8.ae Error: Please enter a valid URL address`);

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