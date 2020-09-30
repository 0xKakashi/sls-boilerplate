# SLS BOILERPLATE

> Serverless Framework AWS Node.js Boilerplate Template

__CREATOR: [0xKakashi](https://github.com/0xkakashi)__

---

__DOCUMENTATION__

* [Serverless](https://docs.serverless.com)
* [AWS](https://docs.aws.amazon.com)
* [Node.js](https://nodejs.org)
* [NPM](https://npmjs.com)
* [JSDoc](https://jsdoc.app/)

__PACKAGES__

* [aws-sdk](https://npmjs.com/package/aws-sdk)

---

## INSTALL

```bash
# Install dependencies
$ npm install
```

### TESTS

```bash
# Run tests
$ npm run test
```

---

## USAGE

> Development & Production

### DEVELOPMENT

__OFFLINE__
```bash
# Start serverless offline environment
$ sls offline
```

__LOCAL__
```bash
# Execute serverless function request
$ sls invoke local -f funcName
```

__HTTP__
```bash
# Execute serverless http request
$ curl -X http://localhost:3000/index
```

### PRODUCTION

__CLI__
```bash
# Execute serverless function request
$ sls invoke -f funcName
```

__HTTP__
```bash
GET https://myapi.com/v1/index
```
