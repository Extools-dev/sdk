# Extools - Authentication and payments SDK

To get started follow the https://extools.dev and check it out.

# How to obtain OAuth keys

You can follow the official manual but it's a bit outdated - https://developer.chrome.com/extensions/tut_oauth

Also you can make a Firebase auth using this manual - https://github.com/firebase/quickstart-js/tree/master/auth/chromextension

Step-by-step guide:
1. You should publish your extension or at least make a draft version
2. From Chrome Webstore dev console obtain your extension id (like `ocgmcodaanlenepilchadlnabakhgaoi`)
3. Find a Feeback panel in Left-Bottom corner of the developer console. Click "Show more" and then click "opt out" link. Find your extension in the old developer console. Click "More info" link in the list. Obtain the public key. It will look like:
```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjq3xx66jeID7UKYurW/H
Ku6qHwQljfEGU3jUo/SqnZMENC2fCUqw/wzLhe/XcOcHot421rgRDw1Gunqt3iIw
Fj6nko49oulGNwwRVVWWUIegJIyxfmKFjxcTd6j6/OOfF6R9Zrg4PSzZRFHQoZ+E
2yM9mLwIwLFCtAppg1zRFElw13pUqrCrO2NTN8QG5OZVz3DpA6rtD7IsWoLRkhg1
5R0zgcqdpp0bdztmqCyMkllzV77S/NNEiMVfCnVHIJeqM9Om+kHahmCKORBagYzG
Pm2TIsycyx45WfrjeVIMEHKZuA6rhqNUCkWHQqKD006XG+smVvCyDv3Hvamx5Vwr
2QIDAQAB
-----END PUBLIC KEY-----
```
4. Add a key to the manifest.json. Example:
```
  ...
  "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgYJEImxTdvnvzPAKMUFQotly9xowzdUF7EBPYdzBpQFfFaJ/GSQZWihyGLgS61QS1hg9kagrEtJy2fhj4720MSBpZ+0s2/JraY0hBsKT/FmWvTEv9z/Ji3TYzzJh1fZxAZFRhfvZo2O2rJ0dHymfWg0vZhWVgtDoOBIluhNSCxqeBIRWccXfvZhTaxWOcDBbnoi2TlZRLRXR5WUB88zyfAP+EKeFT3PeUxBV2gkJ02KFmVvQS4+9s7SS7rfHW48CoQPO2xjcmQYiFb+4xcxJ+XKeHfjmGz3mUNWN92bJUUz5ZpmTFyhJP+UY34hW8cZYcCkXkHbvNxYDLyd7GgsXCwIDAQAB",
  ...
```
5. Create a new OAuth Client ID in your project's Developers Console https://console.developers.google.com/apis/credentials/oauthclient?project=_
6. Select Chrome App and enter your Chrome Extension/App ID (the Item ID obtained above).
6. Note the Client ID (e.g. 7159....j00.apps.googleusercontent.com) as you will need this below.
7. Add to your extension manifest
```
    "oauth2": {
      "client_id": "218799779883-ks46q2ic84s8fglurqrj3esbr8f0n0rp.apps.googleusercontent.com",
      "scopes":["https://www.googleapis.com/auth/userinfo.email"]
    }
```
8. Apply for a OAuth review if it's required

# How to use the SDK 

Check out an example in the folder auth-example

The SDK provides 2 methods:

* `getEmail` - tries to get email address of the user
`interactive=true` means that user will asked to privide OAuth permission.
`interactive=false` is a silent mode that will work for a returning user
* `checkLicence` - fetches user subscrition from the licensing API

You can call getEmail(interactive=false) at the popup show or on the startup to detect if the user is logged on.

You can call getEmail(interactive=true) if the user clicks on a "login" button in your app.

Please note that both methods are async and should be used within the async code.
If you are not familiar with async - please read a documentation e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

# License

Copyright 2020 extools.dev

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
