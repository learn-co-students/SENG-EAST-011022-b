1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm start`.

## Core Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form (this should persist).
3. I can mark a plant as "sold out".


### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```
