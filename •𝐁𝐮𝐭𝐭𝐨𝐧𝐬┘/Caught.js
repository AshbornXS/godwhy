("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let { Image_Button } = require(".//Image_Button");
let Economy = require(`../•𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
exports.Caught = async (ӄryӄnz, Vlkyre, 𝕮𝖔𝖓𝖙𝖊𝖓𝖙) => {
await Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
if (!userEco) {
let newUser = new Economy({
ID: Vlkyre.sender,
money: 500,
daily: Date.now(),
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./•𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_DB.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
Try The Command Again.`
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// await ӄryӄnz.sendMessage(
// "120363038642953887",
// {
// contextInfo: { mentionedJid: [Vlkyre.sender] },
// image: { url: "./•𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_404.png" },
// caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
// │║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
// │║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
// •╚═══════⋑

// ❗ Vlkyre 𝐀𝐏𝐈 𝐄𝐫𝐫𝐨𝐫 ❗
// Please Try Again Later!`,
// footer: `❝ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ❞\n𝖇𝔂 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ [𝟒.𝟒.𝟎]`,
// buttons: [
// {
// buttonId: prefix + "HELP",
// buttonText: { displayText: prefix + "HELP" },
// type: 1,
// },
// {
// buttonId: prefix + "VLKYRE",
// buttonText: { displayText: prefix + "VLKYRE" },
// type: 1,
// },
// ],
// headerType: 4,
// },
// {
// quoted: Vlkyre,
// }
// );
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
return await ӄryӄnz.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender] },
image: { url: "./•𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_404.png" },
caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
•╚═══════⋑

📢𝐀𝐏𝐈 𝐄𝐫𝐫𝐨𝐫
Please Try Again Later or Contact Any Mods.

🤖𝐂𝐨𝐧𝐭𝐞𝐱𝐭
${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: `❝ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ❞\n𝖇𝔂 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ [𝟒.𝟒.𝟎]`,
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: { displayText: prefix + "VLKYRE" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlkyre,
}
);
}
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
