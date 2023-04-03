const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const USER_ID = '790982978825093120'; // Replace with the ID of the user you want to ping
const INTERVAL = 2000; // Change the interval to 10 seconds (in milliseconds)
const BOT_TOKEN = 'MTA4ODIwMjEyMzYxMjgwMzI0Mw.GOjv6D.mfRu9gVqz5mSKQJ-xuTT8Y9NGaPBewSSUd-PJ0'; // Replace with your own bot token

client.on('ready', () => {
  console.log(`Bot is online and ready to ping ${USER_ID} every ${INTERVAL}ms!`);
});

client.on('message', message => {
  // We don't need any message handling logic, so this function can be empty
});

// Define a function to send the ping message to the user
async function sendPing() {
  const user = await client.users.fetch(USER_ID);
  if (user) {
    console.log(user);
    user.send(`<@${USER_ID}> Hey there! Just pinging you my galoomba fellow!`);
  } else {
    console.log(`User ${USER_ID} not found.`);
  }
}

// Call the sendPing function every INTERVAL ms
setInterval(sendPing, INTERVAL);

client.login(BOT_TOKEN);
