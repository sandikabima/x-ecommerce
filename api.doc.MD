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

_Response (400 - Bad Request)
```
{
    "message": "Invalid Email | Password"
}

```