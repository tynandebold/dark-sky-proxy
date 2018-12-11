# Dark Sky API Proxy

The Dark Sky Forecast API is robust and useful. In order to retrieve data from a client-facing application, you need to setup a proxy server to make calls to their endpoint that executes behind the scenes. That way, you don't expose your API key, thus it's kept out of reach from malicious actors.

The project is deployed with [Now](https://zeit.co/now), a product created by Zeit.

## Usage

1. If you want to use this for your own project, first, get up and running with the [Now cli](https://zeit.co/docs/v1/getting-started/introduction-to-now/) and fork this repo.
2. Install the dependencies and run locally: 
```bash
$ npm install
$ npm start
```
3. Add your Dark Sky API [secret](https://zeit.co/docs/v1/getting-started/secrets/) to your Now account, then modify the `API_KEY` property in the `now.json` file, referencing your newly-created secret.
4. Deploy your application by running the `now` command in the root of your project folder in terminal.
5. Use your deployed URL to fetch weather data from a client-side application.

## Endpoint details

Returns json data about weather in a specificed location.

* **URL and Method**

  ```http
  GET /api/v1/weather/:latLong:exclude
  ```

* **URL Parameters**

  | Parameter | Type | Description |
  | :--- | :--- | :--- |
  | `latLong` | `string` | **Required**. A comma-separated latitude and logitude. Spaces between the coordinated are allowed (ex: `-1.9706, 30.1044`). |
  | `exclude` | `string` | **Required**. A comma-separated list denoting what to exclude from the API response (ex. `currently,minutely,hourly`). [Reference.](https://darksky.net/dev/docs)|

* **Successful Response**

  - **Code:** 200
  - **Content**: `{ "latitude": 123, "longitude": 123, "timezone": "...", "daily": { ... } }`

* **Error Response**

  - **Code:** 400
  - **Content**: `{ "code": 400, "error": "The given location is invalid." }`
