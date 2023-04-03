# Annoy-Kay-H
This repository is designed to allow the user to completely setup a discord bot of their choosing to annoy @Kay-H.

This method will cover a server disruption. The goal of this method will be made to completely disallow Kay-H from entering any server with this bot active, lest he get pinged relentlessly with taunts. If blocked, you may simply clone this bot and run it again. It may be helpful to create multiple instances of this bot for this sake. If enough people joined in, it should be enough.

# The FULL ASS GUIDE

Firstly, make sure you have permissions for the server you want to do this in. If you don't, ask the creator or admin to follow these steps. The bot needs to be in the same server as Kay-H for this to work.

Go to https://discord.com/developers/applications/ and click "New Application". Name it whatever you wish, accept the terms, and create it. 
Go to the bot tab on the side, and Add Bot. Confirm this.
You may choose the bot's name here, and give it a profile picture. Go back to the "General Information" tab. You may choose to give it a description.
Now, go to the "OAuth2" tab, and the branching "URL Generator". Give the scope of "bot", and bot permissions of "administrator". Don't worry, it won't do anything beyond what the code tells it to do.
Scroll down, and copy the generated URL. Copy it into your address bar. 
Go through the instructions, including which server you'd like to add the bot to.
Your bot is now present in the server!
Now, go back to the developer portal and go to the "Bot" tab. Click on "reset token". This is the unique indentifier of the bot that you will paste in the code. Copy it and take note of it, it will be hidden the moment you click off the tab or close the page. The bot will stop working if another token is generated, and you will need to put it back into the code.

Now it is time to locally setup this bot. I have created the example file in the code, but its dependencies will use the discord.js library. If you are comfortable with py or perhaps the typescript equivalent of .js, you may do what suits you best. 

Create a folder on your desktop (or wherever you wish) called "KHBot". You may change the name, but we are just setting up the environment on which to work in.
We will setup dependencies. Make sure you have administator access for the following steps. 

Visit the official Node.js website at https://nodejs.org. Download the user suggested version. Run the installer and choose default settings (unless you need to change them). Node.js should now be installed, along with npm.

In your command prompt, in the folder (you may click on the path, and type in cmd).
Run the following command:
'npm i discord.js@13'
This bot will not work with later versions, its code is deprecated. You should now notice a folder and some files in your workspace. Now, right click, and create a new text document. Delete everything in the name (including the .txt extension), and rename it to index.js
The github will have a release folder with the necessary file. You may download and replace the one created, or more simply, just copy its code into your existing file.

Now we begin editing the code. On discord, right click on Kay-H's name for his user ID. If you don't want to, its just '343131517469327360'. Replace the existing user ID.
On the bot token, replace it with your own.
You can make the interval longer, but not any shorter, as two seconds is about the minimum discord will allow it to send at. Note that the interval is in milliseconds.
You can personalize what the bot will ping Kay-H with by editing the user.send line. You can put whatever in there, though keeping the <@${USER_ID}> is recommended to allow the pinging. 

At this point, you should be done! To run the bot, go to the main folder of the project, click on the path on the top, and type in "cmd". Then run the following command:
'node index.js'
You will know its working if it continuously shows pinging in the console log.
That's it! If the bot isn't working, then sadly Kay-H has likely blocked it. You may need to do this guide again, sans the installation of node. Again, strength in numbers. Issues can be directed to SteakIsFake#7231.
