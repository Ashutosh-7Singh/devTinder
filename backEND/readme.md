# For validating email and password

- npm i validator

# For encrypting password

- npm i bcryptjs

# For reading cookie

- npm i cookie-parser

# For JWT

- npm i jsonwebtoken

* in the production we hava to expire cookies also so we have to use {httpOnly:true} in this line -> res.cookie("token", token,{httpOnly:true});

# this will expire the cookie in 8 hour -> res.cookie("token", token,{expires:new Date(Date.now()+8\*3600000)});

# we are using express router to handle all the router




-PATCH /profle/password // Forgot password API 
# first it wll validate the given new password is strong to rnot 
# it will take old password ,then new passwod


# /request/review/:status/:requestId

- first login is the toUserId
and status is intrested 
- then the stauts changed to rejected or accepted

// Validate the status
      // Akshay ->Elon
      // loggedInId=toUserId
      // status =interested
      // request Id should be valid

 # Every line Evey code Matter
 # Code never lies
 # Thought process for POST and GET API's

 <!--How to find Connection Request  -->

 # user/requests/recieved
 - toUserId = loggedInUser._id
 -
 

 <!-- get all the connection -->

 # -GET /user/connections

 suppose ->user ->Akshay ->Elon ->accepted so status should be accepted
 Elon - Mark -> accepted
 means fromUser and touser but the status should be accepted 

 <!-- feed API -->
 # /user/feed


 - Suppose Akshay is the user
 * then Akshay can see the cards of whom Akshay is not sended the request
 * Akshay has ignored some body profile 
 * Akshay whose not see the users who is already in connection 
 * Akshay cannot see his own profile 
 
