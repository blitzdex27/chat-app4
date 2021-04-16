# Readme
# Chat app

# Please clone to test this app (git should be installed)
1. Clone using a terminal: git clone https://github.com/blitzdex27/chat-app-semi.git
2. Or just download the ZIP and extract the files.


# Pre-requisites:
1. Node.js (https://nodejs.org/en/)
2. nodemon (npm install -g nodemon)
3. MongoDB local (https://www.mongodb.com/try/download/community)

*When mongodb is installed: Open a terminal. Then enter: "mongod" to start the mongodb local database

# Instructions
1. Open using VS Code the root directory
2. From VS Code terminal: "npm install"
3. Then: cd client
4. Then: npm install
5. Then: cd..
7. Then head back to the previous terminal then enter "npm run dev" (this will open both the server and the client locally through different ports.

Wait for the servers to startup. 
The browser will open up automatically. (specifically, it will open localhost:3000 in your browser)


This is still in development.
Problems encountered:
1. I got stucked with the CORS error. When my frontend is trying to request for authorization to the server through google login. I skipped it for now and use the local login method.
2. I finished the react front end for log in, signup, and messaging. Built from scratch, from the knowledge I had. I planned that I will just get the current user, messages to and from the user, and users index for searching. However, that didn't worked too well. My app can create new users, but cannot log in. I am using passport for authentication, and somehow my client redirects after successful log in from the server. And so, that broke my code. I planned to just persistently request data every second from the server so if someone messaged, the new data will be updated in the client. However, I can't even get the confirmation from the server that the user has successfully logged in. 
3. I figured that I need websockets method, instead of short polling. I didn't even know these terms before I started this project. I only had a rough idea that what I planned before was not efficient. And also, I only used passport for authentication, I didn't do the manual authentication setup.
4. I think this is beyond me for now. I am skipping many topics just to finish this. I think it will be good for me if I learn progressively, so I will have a good foundation in programming and web development. I am currently taking another course in Udemy and I stopped it for a while for this project. I thought this would be easy. When I read the app I am making, I only saw one thing that I need to learn before I can do it. It was on how I can connect my react into my server. I knew API's and learned it in a course for around 2 hours, as it is a sub module. And I studied react for about 8 hours in that course, it was the last part. Definitely, my knowledge is not enough, I only have the basics.

I am learning websockets for a few more hours and try again for about 3 hours then head back to learning through Udemy.

I pushed myself to the limit with this project. I know this is not very responsive app and some bugs. I can't help it, I only started learning web development and the actual programming 3 months ago.
