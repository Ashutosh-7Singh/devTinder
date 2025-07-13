# DevTinder 

-Created a Vite + React application
-Remove uneccessary code a HELLO WORLD in APP.jsx
-Install Tailwind CSS
-Install Daisy UI
-Add NavBar component in App.jsx
-Create a  saperaet NavBar Component 
- install npm react-router-dom 
-Create BrowserRouter>Routes>Route 
-outlet creatd 
-footer created
-Install axios 
-Install CORS in the BACKEND => ADD middleware configurations: orign ,credentails:true
-Install react-redux+ @reduxjs/toolkit =>configureStore=>Provider => createSlice=>add reducer to store 
-Add Redux dev tool in login and update navbar 
-Navbar should update whenuser login 
-Refator our code to add contants file + crate a compenents folder and move all the component in this 
-If token is not prosent ,redirect user to login page 
-Logout done
-Profile
-get the feed in the store 
-build the user card on feed
-Edit profile feature and show toast on save 
-Seel all my connection
-New page -See all my connection request
-New page -See all my Requests page
-Feature Accept/Reject Connection Request 
- 

Remaning 
-Send/ignore the user card from feed 
-signup New User
-E2Etesting


# component Design
- Body  
    NavBar 
    Route=/ => Feed
    Route=/login =>Login
    route=/connection =>Connection








DEPLOYMENT for frontend
-signup on AWS 
-Launch instance
-chmod 400 <secret>.pemp-
-Connected by using this command -
ssh -i "devTinder-secret.pem" ubuntu@ec2-13-204-69-243.ap-south-1.compute.amazonaws.com
- install node version same as you project 
- git clone <repo HTTPS URL>
- npm i (to install the dependency )
- npm run build 
- sudo apt update
- sudo apt install nginx -y 
- sudo systemctl start nginx
- sudo systemctl enable nginx
* copy code from dist(build files) to /var/www/html so - cd /var/www/html - to see the file 
- cd -again we hve to move to our project folder 
- then go to your project folder  and use command scp
- sudo scp -r dist/* /var/www/html/
- Enable PORT :80 ON your instance 
- Then go to your public instace and find you publice ipAddress
- 



Deployement for Backend


- allwed ec2 instace public IP on mongodb server 
-installed npm install pm2 -g 
-pm2 start npm -- start 

#
- pm2 logs
- pm2 list,pm2 flush <name> , pm2 stop <name> ,pm2 delete <name>
# for giving custom name 
-  pm2 start <oldName> --name "<name>" --start
* ex - pm2 start npm --name "devtinder-backend" --start




FrontEnd-http://54.174.12.105
BackEne-http://54.174.12.105:1212





#
ssh -i "devTinder-secret.pem" ubuntu@ec2-13-204-69-243.ap-south-1.compute.amazonaws.com


