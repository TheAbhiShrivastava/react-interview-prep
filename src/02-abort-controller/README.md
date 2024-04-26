# AbortController

The `AbortController` is a built-in JavaScript object that allows you to abort one or more Web requests as and when desired. It provides a means to communicate with a DOM request (such as Fetch) and abort it if required using the `AbortSignal`.

## Use in React

In React, `AbortController` can be particularly useful in scenarios where a component gets unmounted while an API request initiated by that component is still ongoing. If the response of this request tries to update the state of the unmounted component, it will result in a memory leak. This is where `AbortController` comes in. We can use it to cancel the API request when the component is unmounted.

## Usage with Axios

Axios, a popular HTTP client, allows us to use `AbortController` by passing an `AbortSignal` as a parameter in the request configuration. Here's an example:

```javascript
import axios from 'axios';

const controller = new AbortController();
const { signal } = controller;

axios.get('https://api.example.com', { signal })
  .then(response => console.log(response))
  .catch(error => console.log(error));

// To abort the request
controller.abort();
```

Axios also provides a timeout parameter that can be used to automatically abort the request if it takes longer than specified.

```javascript
axios.get('https://api.example.com', { signal, timeout: 5000 }) // 5 seconds
```

## Usage in `AbortController.jsx`

In the `AbortController.jsx` component of this project, we have used `AbortController` to manage API requests. When the component is unmounted, we call `controller.abort()` in the cleanup function of `useEffect` to cancel any ongoing API request. This prevents potential memory leaks from updating the state of an unmounted component.
