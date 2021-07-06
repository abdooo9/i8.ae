
<div align="center">
  <br />
  <p>
    <a href="https://i8.ae"><img src="https://discord.com/assets/7c13aa0def6ccb6932f47dedd33f59c1.svg" width="150" alt="i8.ae" /></a>
  </p>
  <br/>
  <p>
	<a href="https://www.npmjs.com/package/i8.ae">
		<img src="https://nodei.co/npm/i8.ae.png">
	</a>
  </p>
  <p>
  <p>
    <a href="https://www.npmjs.com/package/i8.ae"><img src="https://img.shields.io/npm/v/i8.ae.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/i8.ae"><img src="https://img.shields.io/npm/dt/i8.ae.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

# i8.ae
<br/>

# Table of contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)
- [Links](#links)
- [Contributing](#contributing)

## About 

- NPM package that makes your link shorter using i8.ae API
- Lots of advantages
    - No ads
    - Free
    - Make your short link secure with password

## Installation

```
npm i i8.ae
```


## Example Usage

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

## Links 
- [Website](https://I8.ae/)
- [NPM](https://www.npmjs.com/package/i8.ae) 
- [GitHub](https://github.com/abdooo9/i8.ae) 

#### Contributing
©  - Copyright (c) 2021 abdooo9.dev@gmail.com (abdooo9)
