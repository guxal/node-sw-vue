# Node Start Wars API Vue

## Required

- docker
- docker-compose
- vue

## Build backend

```bash
docker-compose up -d
```

> view api in the url localhost:3000


## Build frontend 

Enter in the folder app and run the below commands

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

> open your localhost:8080

### Compiles and minifies for production
```
yarn build
```



## Endpoints

| method | route | description |
| --- | --- | --- |
| GET | /people | all people
| GET | /people/:id | get people by id
| PUT | /people/:id | update people by id
| POST | /people | create new people
| DELETE | /people/:id | delete people by id 


### JSON Object 

> object must be send in the methods PUT and POST

```json
{
    "name": "Luke Skywalker",
    "weight": "75.4",
    "hair_color": "Blonde",
    "home_world": "Tatooine"
}
```