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
    "email" : <email to get insert into>,
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

### Post / products

> Create new products

_Request Header_
```
{
  "access_token": "<your access token>"
}

```

_Request Body_
```
{
    "name" : "<name to get insert into>",
    "image_url" : "<iamge to get insert into>",
    "price" : <price to get insert into>,
    "stock" : <price to get insert into>
}
```



_Response (201 - Created)_

```
{
    "payload": {
        "status_code": 201,
        "datas": {
            "id": 5,
            "name": "product2",
            "image_url": "pro-url",
            "price": 2000,
            "stock": 5,
            "updatedAt": "2024-04-20T07:29:08.506Z",
            "createdAt": "2024-04-20T07:29:08.506Z"
        }
    },
    "message": "Insert product successfuly"
}

```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid requests"
}
```


### Get / product

> getAll product

_Response(201)_

```
{
    "payload": {
        "status_code": 200,
        "datas": [
            {
                "id": 1,
                "name": "product1",
                "image_url": "pro-url",
                "price": 2000,
                "stock": 5,
                "createdAt": "2024-04-19T17:06:28.517Z",
                "updatedAt": "2024-04-19T17:06:28.517Z"
            },
            {
                "id": 2,
                "name": "product1",
                "image_url": "pro-url",
                "price": 2000,
                "stock": 5,
                "createdAt": "2024-04-19T17:06:35.085Z",
                "updatedAt": "2024-04-19T17:06:35.085Z"
            },
        ]
    },
    "message": "Get all products successfuly"
}
```

### Get /product/:id

> get product by id(find)

_Request Params_

```
id
```

_Response (200)_
```
{
    "payload": {
        "status_code": 200,
        "datas": {
            "id": 1,
            "name": "product1",
            "image_url": "pro-url",
            "price": 2000,
            "stock": 5,
            "createdAt": "2024-04-19T17:06:28.517Z",
            "updatedAt": "2024-04-19T17:06:28.517Z"
        }
    },
    "message": "Get product successfuly"
}
```

### delete /product/:id

> delete product by id(find)

_Request Params_

```
id
```

_Request Header_
```
{
    access_token : <your access token>
}
```

_Response (200)_
```
{
  message: "success deleted"
}
```


### Patch /product/:id

> delete product by id(find)

_Request Params_

```
id
```

_Request Body_

```
{
    "name" : "<name to get insert into>",
    "image_url" : "<image to get insert into>",
    "price" : <price to get insert into>
}
```

_Request Header_
```
{
    access_token : <your access token>
}
```

_Response Body_

```
{
    "payload": {
        "status_code": 200,
        "datas": {
            "id": 1,
            "name": "product-1",
            "image_url": "image_url",
            "price": 10,
            "stock": 5,
            "createdAt": "2024-04-19T17:06:28.517Z",
            "updatedAt": "2024-04-20T07:59:06.533Z"
        }
    },
    "message": "Product success update"
}
```

### Post /cart

> create new cart

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "ProductId": 1,
  "UserId": 2,
  "quantity": 2,

}

```

_Response (20i - Created)_
```
{
    "payload": {
        "status_code": 200,
        "datas": {
            "id": 13,
            "productId": 2,
            "userId": 2,
            "quantity": 2,
            "status": "cart",
            "createdAt": "2024-04-20T07:12:32.523Z",
            "updatedAt": "2024-04-20T08:07:29.005Z"
        }
    },
    "message": "add cart successfuly"
}

```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid requests"
}
```

### pacth /cart/:id 

_Request Params_

```
id
```

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "quantity" : <quantity get insert into>
}
```

_Response Body_

```
{
    "payload": {
        "status_code": 200,
        "datas": {
            "id": 13,
            "productId": 2,
            "userId": 2,
            "quantity": 5,
            "status": "cart",
            "createdAt": "2024-04-20T07:12:32.523Z",
            "updatedAt": "2024-04-20T08:08:45.324Z"
        }
    },
    "message": "update cart success"
}

```

### delete /cart/:id

_Request Params_

```
id
```

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "message": "success to delete"
}
```





