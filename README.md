# A.I.kyan
## What do?
This bot will fetch pictures posted by a Twitter account and link them to Discord.
It can be configured to fetch pictures every so often, letting you cross-post pictures (from a Twitter bot who posts pictures every hour for example) to your preferred Discord server.

It requires **embed link** permission in order to work on a server!

## How do?
It runs like any old npm package. You just need to fill in the `pw.json` file with your keys, then `node index.js` and you're good to go.

## Can do different?
You can change some config stuff in `config.json` like the command prefix and the `get` file location.

## What do later?
- Cache results, I'll do this if the bot is ever used by a lot of people on the same few twitter accounts.
- Get actual support for text tweets, I'll do this if there's any interest at all from anyone to do it.
- Notify users more precisely when there's a problem, mostly with permissions.
- Better privilege control etc. Right now AIkyan treats all users the same, except for the bot owner (you) who can bypass a few security things for debugging purposes.
