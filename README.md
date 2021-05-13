# ZURI CRUD APP

### Current Version
The current version of this api is version 1 (v1)
### Root Endpoint
The root end point for the api is  `https://murmuring-inlet-66798.herokuapp.com `

### Request 

Request paramter can be JSON or url encoded paramter

### Response

## Error  Response Sample
```
{
    status:false,
    message:"This is a message"
}
``` 
## Success Response Sample
 ```
{
    message:"Data fetched succesfully",
    data:[
        {
            name:uuuu,
            id:_9000000
        }
    ]
}
```

### Payload Creation
__POST /user__

The /user endpoint register the payload on the plattform

Parameters

Name | type
------------ | -------------
email | String
name | String
country | String

```

Request Body
{
    "name":"polaris"
    "email":"ploar@gmail.com
   "country":"Nigeria"
   
}
```
Response Code
```
{
    message:"Registration successfull",
    data:[
        {
            "name":"test",
            "email:"test@gmail.com",
            "country":"nigeria"
        }
    ]
}
```

### GET PAYLOAD
__GET /user__

The /user endpoint get the payload on the plattform

Response Code
```
{
    message:"Payload fetched successfully",
    data:[
        {
            "name":"test",
            "email:"test@gmail.com",
            "country":"nigeria"
        }
    ]
}
```

####  UPDATE A PAYLOAD

__PUT  /user/:userId__

The ` /user/:userId` endpoint  enable a user to update a registered payload.


Sample Request Paramter
```
{
    "name":"polaris"
    "email":"ploar@gmail.com
   "country":"Nigeria"
   
}
```
Sample Success Response
```
{
    message:"Payload updated successfully",
    data:[
        {
            "name":"test",
            "email:"test@gmail.com",
            "country":"nigeria"
        }
    ]
}
```

#### TUTOR TO DELETE A REGISTERED SUBJECT

__DELETE  /user/:userId__

The ` /user/:userId` endpoint  enable a tutor to update a registered subject.

Sample Success Response
```
{
   message:"Payload delete successfully",
    data:[
        {
            "name":"test",
            "email:"test@gmail.com",
            "country":"nigeria"
        }
    ]
}
```