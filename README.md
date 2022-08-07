# Chatbot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Installation

Angular CLI : 14.1.1 <br>
Node: 16.13.1 <br>
Package Manager: npm 8.16.0 <br>

_________________________________________ <br>

npm install <br>
npm serve <br>


## How to get response from wit.ai on the project

1. Please login with your facebook account on wit.ai
2. Create new app after login
3. On the left bar, go to Management -> Settings, copy "Server Access Token"
4. Go to project -> app/components/chatview/chatview.components.ts and paste on "witToken'
5. Go to Understanding and then you can see "Add a new Utterance"
6. Type "hello" on the "Utterance", click "intent", type "wit_greetings", click "+ Create Intent"
7. Click button "Train and Validate"
8. Need to wait until project signal will be "green" from "yellow" because AI is learning.
9. After green, send message on project, just "hello" 

