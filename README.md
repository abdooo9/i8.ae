# i8.ae

<center>
	<a href="https://nodei.co/npm/i8.ae/">
		<img alt="npm-searcher package" src="https://nodei.co/npm/i8.ae.png">
	</a>
</center>

* NPM package that makes your link shorter using i8.ae API

# Installation from [NPM](https://www.npmjs.com/package/i8.ae)

```
npm i i8.ae
```


# Examples

### (Using .then function)

```js
const api = require('i8.ae')
const i8 = new api("Your_i8.ae_API_Key") // You can get it from (https://i8.ae/user/tools/api)

// Short link
i8.short('https://www.google.com/').then(res => {
    console.log(res) // https://i8.ae/Kz1oi
})

// Short link with password
i8.secure('https://www.google.com/','test').then(res => {
    console.log(res) // https://i8.ae/c5ibj With password "test"
})
```

### (Using async function)

```js
const api = require('i8.ae')
const i8 = new api("Your_i8.ae_API_Key") // You can get it from (https://i8.ae/user/tools/api)

// Short link
async function shorter() {
    const res = await i8.short('https://www.google.com/')
    console.log(res) // https://i8.ae/Kz1oi
};
shorter();

// Short link with password
async function secure_shorter() {
    const res = await i8.secure('https://www.google.com/', 'test')
    console.log(res) // https://i8.ae/c5ibj With password "test"
};
secure_shorter();

```
#### Contributing
©  - Copyright (c) 2021 abdooo9.dev@gmail.com (abdooo9)
