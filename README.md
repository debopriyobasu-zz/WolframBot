# WolframBot
## What is it?
WolframBot is a chat-bot that connects to the Wolfram Short Answers API to fetch the main results of a query<br/>
**This is the WolframBot in action**<br/>
<img src="https://media.giphy.com/media/5honLCEMvjuBEFAG1Z/giphy.gif"/>
## How does it work?
### Workflow
* User opens the webpage.
* User selects the Toggle Chat button.
* The chat window pops up.
* The bot is invoked when the user begins with a greeting to the Wolfram Alpha bot. It responds back with a simple greeting of its own.
* To start the search query, the user must enter in one of the following prompts:<br/>
<img src="https://github.com/debopriyobasu/WolframBot/blob/master/1.png" />
* The bot follows the prompt with one of the below responses:<br/>
<img src="https://github.com/debopriyobasu/WolframBot/blob/master/2.png" />
* The user can now send in their query. As the bot makes a call to the Short Answers API, the user query must be such that a direct question is asked where the response is expected to be a direct answer. As such, queries such as the following are encouraged:<br/>
‘What is the distance to the moon?’<br/>
‘How much does the Earth weigh?’

### Internal Implementation
The above query is recorded by the bot as a parameter and a specific action is tied to it. Here, the action is set to ‘query’. When the bot receives a query, the parameter is set as the question which user has asked. This action and parameter is sent to a web service which will receive a POST request from Dialogflow in the form of the response to a user query matched by intents with webhook enabled.
<br/>
The web service is backed by Python code with Flask micro framework. A sample request from DialogFlow:<br/>
<img src='https://github.com/debopriyobasu/WolframBot/blob/master/3.png' /><br/>
The program then extracts the request and processes it. The action is obtained and if the action matches ‘query’, then the program moves on to extract the parameters. The parameter consists of the user query, which is converted to a string and modified to be used in an URL. The base URL contains the base path to Wolfram Alpha’s services as well as the API ID. The user query is appended to the URL and the final URL sent to Wolfram Alpha.
The response is recorded and then modified to be sent back to DialogFlow in a way that is understandable by the bot. A sample response looks like:
<img src='https://github.com/debopriyobasu/WolframBot/blob/master/4.png' /><br/>
The bot is then able to extract the response and the plain text answer is conveyed to the user. 
The user can then wrap up the conversation by either thanking the bot or by sending in a goodbye prompt.

## What does it use?

1. ReactJS
- react-detect-offline
2. Dialogflow
3. Python/Flask
4. Wolfram Short Answers API
5. Node Package Manager
6. Material-UI v1 beta

## Steps to clone

To clone and run the application in your system, follow the instructions below:<br/>
* Open git bash on the directory you wish to install. You can right click on the directory in file explorer and select _Git Bash Here_ or open the git bash and type  

```
cd <your-directory-name-here-without-the-angled-brackets>
```
for example,if I want to go to the desktop,then I will type 
```
cd desktop
```
the default directory opened when you open Git Bash is the root directory.
* Now,you can proceed to clone the application using the following command:
```
git clone https://github.com/debopriyobasu/WolframBot.git
```
* After the cloning is complete,traverse to the cloned app directory using the following command:
```
cd WolframBot/microservices/ui/app
```
* Now, install the dependencies using the following command:
```
npm install
```
Please wait for a while as it will take some time to download all the dependencies depending on the speed of your internet connection.<br/>
* Now, you are ready to start the application!
```
npm start

```
* The app will be running at localhost:3000 unless it is being used by any other app.

## Feedback and additional information
> This project is a part of the HPDF group task for team 62. The participants are:<br/>
Debopriyo Basu - front-end dev<br/>
Chaitri S Mohan - back-end dev<br/>
Suraj Bhor - back-end dev<br/>
In case of any feedback or queries, feel free to mail me at debopriyobasu@gmail.com
