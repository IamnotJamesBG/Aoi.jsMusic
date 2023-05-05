const aoi = require("aoi.js");

const allIntents = ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"]

const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
} = require(`@akarui/aoi.music`);


const bot = new aoi.AoiClient({
    token: "your bot token", 
    prefix: "your prefix",
    intents: allIntents,
    events: ["onMessage", "onInteractionCreate"]
})

bot.status({
text: "Your Text Here",
type: "WATCHING",
status: "IDLE",
time: 2
})

bot.readyCommand({
code: `$log[Bot Is Ready!]`,
})

const loader = new aoi.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

const voice = new AoiVoice(bot, {
    searchOptions: {
        // soundcloudClientId: "Sound Cloud Id",
              // spotifyClientId: "Spotify Id",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

// adds a cacher plugin
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));

// adds a filter plugin
voice.addPlugin(
    PluginName.Filter,
    new Filter({
        filterFromStart: false,
    }),
);

voice.bindExecutor(bot.functionManager.interpreter);

voice.addEvent(PlayerEvents.TRACK_START);


bot.variables({
var1: "value",
var2: "value",
})


//DONT DELETE THIS
const keepalive = require("./server")
const {AutoKill} = require("autokill")
AutoKill({ Client: bot, Time: 5000 })
keepalive() //add on uptimerobot { AoiClient } = require("aoi.js");
