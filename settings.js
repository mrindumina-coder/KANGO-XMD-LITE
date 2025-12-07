//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : MR INDUMINA👾
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +94762912642 

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhtVnJTNUhqSjIwdTlwQmZIN0E1ekxuelFwZVpMV0pJRTNsYVdBMG9sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUk0b0ExQ1NyOG5TUjgrVUQrb3RDbitJOGFHcEgzSmlvUUtqb2ozTi9uQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RlhBRnEyN3k2TnUycFZnckYraS8zaHZmVG1Gbno1RE9ucE5YRk1ieFhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3cTltVXFXcFFHQjNkSVB4ZGJpQ2RjcUlINXdVWlcybmJUa3hvdDljdW1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMUzZnNlJVd0NtS250UjNyVFZSVUFqWUJmWGFiQWJRT3lGYmpLREtVRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI2bjlLVVZWSnBFY2RNeklvSUFKYjhNUHpsR3FPV3BFdytxTFJTbGE3Q2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURHdG9QY0orVE03YlhaNG5wbTNDdHJ2SVhQdnlVNjNpc0ZiR2p1RVVuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1FEY1ZhSjZEQ0ZkTXhyWkJwVVQ1SHl1bHduQVd4eDNYUkQyREZEaDRpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFicW9lNC9oc0kzUU9tMTZ5RGZGSlZXSUFxWlBKM0lka2tJajJGbnNGcys1bGU1N3ovOWJXKzdxeUZCck9acGNhZWJPQ1o3VFpQZ2VsSExNZFozMkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6InlDcUYyMWZDRzRZQXFub0E4SlROQ3dhczlZeU95Tmhza2xNWGNqRXJOWDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjMwMDM5NjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMUI4Q0E3MjUzNjU1ODcyNTA4MkUwMEZBRDMxMTg5IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjUwNjY4MTd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzMDAzOTY2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzAyNjlEREUxRjU1QjVFNTdCRjNDRUZENEFGNDc3QyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1MDY2ODE3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc2MzAwMzk2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNCMDk4MjA4QTkwOEY4QjdGRDAxMzQzNjRGNEU4RjIiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NTA2NjgxOX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2NTI3UDUxNyIsIm1lIjp7ImlkIjoiOTQ3NjMwMDM5NjY6MTRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMjc1OTU2ODYyOTg0NToxNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pmdm1wa0JFSzZRMDhrR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9ieC93eStDaHpHZ0dvU2FmZEh5QjFNdG9hQUcrOHNSR1Jhb25QRC9oVjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJXTHRMZDkvWkk3UGpLTTBkV2M0ZUxhSE1vMjBwMXM3bW1NTGoxODdzdE9Za3JybjIwZkFYcVh6R1dOK2ZEZUFFbEZ5bk5CUDR5dmxZUDZzemdKakFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCNzBKYWw2c1UvdjV3WEY5Yk42ckY1bkF3OGhxMU54M0p4SGVoVmp6OForTmRTV3FmamNVRTh3UHhhc01EWnUwRGtpeko3VzhKNDAyUmJpbGVtcEtEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNzU5NTY4NjI5ODQ1OjE0QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUbThmOE12Z29jeG9CcUVtbjNSOGdkVExhR2dCdnZMRVJrV3FKencvNFZlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjUwNjY4MTIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjVWIn0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '94762912642' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'MR INDUMINA 🥀👾' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "MR INDUMINA💌" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Asia';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "MR INDUMINA🙄"  

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "MR INDUMINA👾🥀"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
