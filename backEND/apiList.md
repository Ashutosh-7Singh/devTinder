# DevTinder API's

authRouter
-POST /signup
-POST /login
-POST /logout

profileRouter
-GET /profile
-PATCH /profile/edit(here we are not edit the email and password)
-PATCH /profile/password

connectionRequestRouter

# request API's

-POST /requrest/send/status/:usrId

# status should be

- intrested
- ignored

# review API's

-POST /requrest/send/status/:usrId

# status

- accepted
- rejected

# userRouter

- GET /user/connections
- GET user/requests/recieved
- GET /user/feed - Get you the profile of other users on platfrom

# Status: ignore ,intrested,accepted,rejected

- Logic for GET /feed API
- Explore the $nin , $and ,$ne != quesry operators

# now for paginatio we use query aprams

/feed?page=1&limit =>1-10 => .skip(0) & .limit(10)

/feed?page=2&limit =>11-20 => .skip(10) & .limit(10)

/feed?page=3&limit =>21-20 => .skip(20).limit(10)

# skip formula

- skip=(page-1) *limit
