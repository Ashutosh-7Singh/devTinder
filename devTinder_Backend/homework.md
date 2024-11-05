* create a repository
* Initialise the repository
* node_module,package.josn ,package-lock.json difference
* Instll express
* Create a server
* Listen to port 7777
* Write request handlers for /test ,/Hello 
* Install nodemon and update the script in package.json
*  what are dependencies
* What is the diff between "^ & ~"
* what is the use "-g"



EPISOE-04 HW
* .gitignore
* Create a remote repo on github
* Push all code to remote origin 
* Play with routes and route extension ex. /hello,/,/hello/2 etc
* Order of the routes matter a lot baby
* Install Postman app and make a workspace/collection and test API 
* Write logic to handle GET,POST,PATHC DELETE API's Calls and test them on Postman
* Explore routnig and use of ?,*,(), in the routes 
* Use of regex in routes /a/,/.2abc

EPISODE-05|Middlewares  & Error Handlers

* read what is middleware and how express handle request behind the sciene
* learn difference bwtenn app.use and app.all 
* Error handling app.use("/" ,(err,req,res,next)=>{});


Eposide-06 
* Createa a free cluster on MongoDB official website (Mongo Atlas)
* install mongoose library 
* Connect your application to the Database "Connection-url"/devtinder
* Call the connectDb function  and connect of database before starting application on 7777
* Create a user Schema
* Create POST/signup API to add data to database
* Push some documents using APis's call from postman
* ErrorHandling using try and catch 

Eposide-07
* JS object vs JSON(difference)
* Add the express.json middleware to your app
* Make your signup API dynamic to recieve data from end user 
* User.findOne with dublicate emailId,which oject returned
* API-Get user by email 
* API & Feed API+GET?feed -get all the users formt he database 
* Createa a delete user API
* Difference between patch and put 
* API - Update  a user
* Explore the Mongoose Documentation for Model method
* What are option in a Model.findOneAndUpdate method,explore more about it 
* API -Update the user with email ID

Eposide-08 
* Explore schema type option form the documentaion 
* add requires,uniques,lowecase,min,max,trim
* add default
* create a custom validate function for gender
* over all imporve the database schema 
* put appropriate validation in each fileds
* add timestamps to the schema 
* add api level validation on patch  request & signUp api 
* DATA Sanitization - Add api validation fro each fields
* Install validator 
* Explore  validator library function and use validator function for  password,photo and url 
* Never trust req.b  ody so always validate and sanitize your code ok
* Validate data in Signup API
* Install bcrypt package
* Create PasswordHash using bcrypt.hash & save the user is excrupted password
* Create login API
* Compare password and throw errors if email or password is envalid

Eposide-10
* Install cookie parser
* Send dummy cokkie to user 
* Create a dummy profile api and check if the cookie back  we can send by res.send 
* Install json web token
* In login API ,after email and password verification  create a jwt token and send it back to user in cookied
* Read the cookie inside your profile api and find the looged in user 
* userAuth Middleware
* Add the userAuth middle  ware in profile API and a new sendConnectionRequest API
* Set the expiry of JWT token and cookies to 7 days 
* Create userSchema method to getJWT()
* Create userSchma method to comparePassword(passwordInputUser)
* Explore tinder API's 
* Creata a list of all API's you have think to build devtinder
* Group the all API's under respective routerName
* Read documentaion for express.Router
* Create routes folder for managing auth ,profile,request routers
* create authRouter ,profileRouter and request router
* Import these routers in app.js
* Create logout API
* Create PATCH /profile/edit API
* Create PATCH /prfile/password API +> forgot password API
* Make you validate all data in every POST ,PATCH APis

Eposide-12
* Create connection Request Schema
* Send Connection Request API's
* Proper validation of data
* Think about all corner comparePassword
* Read about $or and $and qury in mongooose or mongoDB ->[text](https://www.mongodb.com/docs/manual/reference/operator/query/or/)
* Schema.pre("save") function 
* Read more about indexes in MongoDB
* Why do we need index in DB?
* What is the advantages and disadvantage of createaing index?
* 