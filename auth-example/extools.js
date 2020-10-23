"use strict";

class Extools {
    constructor() {
        if (!chrome.identity) {
            console.warn('You need identity permission for authentication')
        }
    }

    // returns null or email
    async getEmail(interactive=false) {
        const token = await new Promise((resolve,reject) => {
            chrome.identity.getAuthToken({interactive: interactive}, resolve)
        })

        if (!token) {
            return null;
        }

        const init = {
            method: 'GET',
            async: true,
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            'contentType': 'json'
        };

        const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', init);
        const data = await response.json();

        if (!data.email) {
            return null;
        }

        return data.email
    }

    async checkLicense(base_url, email) {
        var res = {}
        try {

            const url = base_url + encodeURIComponent(email);
            const resp = await fetch(url);
            res = await resp.json()   
        }
        catch (e) {
            console.error(e, e.stack);
            res = {status: 'error'}
        }

        return res;
    }
}