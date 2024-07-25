# Cookie Testing Project

## Overview

This project is designed to test how cookies work across different domains. It includes a frontend application and a backend service, both deployed separately to observe and test cookie behavior in different domain scenarios.

🖥️ [Frontend](https://cookie-omega-six.vercel.app/)

🛠️ [Backend](https://cookie-bg8z.vercel.app/)



### Fetch API
The Fetch API provides a simpler, more native way to make HTTP requests in JavaScript. It is built into modern browsers, eliminating the need to include external libraries.

#### Advantages of Fetch API:
- Native browser support
- Simpler syntax for basic requests
- Returns promises, allowing easy chaining
- No need to install additional libraries

#### Sending Cookies with Fetch API

To send cookies with the Fetch API, you need to set the `credentials` option to `include` or `same-origin`.

```javascript
fetch('https://your-backend-domain.com/endpoint', {
  method: 'GET',
  credentials: 'include', // or 'same-origin'
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
