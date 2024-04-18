### Post / Login

> Authenticating

_Request Body_
```
{
    "email" : "<email to get insert into>,
    "password" : <"password to get insert into">
}

```

_Response (200 - Created)_
```
{
    accessToken : <access_token code>
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Invalid Email | Password"
}

```

### Post / Register

_Request Body_
```
{
    "email" : "<email to get insert into>,
    "password" : <"password to get insert into">
}
```

_Response (200 - Created)_
```
{
    "payload": {
        "status_code": 200,
        "datas": {
            "id": 15,
            "email": "user9@gmail",
            "password": "$2b$08$guBxdDHedI4kS0P4wXa/ruaaH8uJMkrSgJTIb2o1w4DzgAI8R6hZO",
            "updatedAt": "2024-04-18T12:36:21.435Z",
            "createdAt": "2024-04-18T12:36:21.435Z",
            "role": "costumer"
        }
    },
    "message": "Registrasi successfully"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Invalid Email | Password"
}

```

_Request Body_
```
{
    "email" : "<email alright in database>,
    "password" : <"password to get insert into">
}
```

_Response (409 409 - Conflict)_

```
{
    "message": "Email is registered"
}
```