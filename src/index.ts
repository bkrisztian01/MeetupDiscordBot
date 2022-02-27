import {Client} from 'discord.js';
import {Configuration} from './configuration';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';

const token = Configuration.discordAPIKey;

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(token);
