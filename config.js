const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "BLUE DEMON !" 


global.devs = "2347041039367" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2347071701141";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_13_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklBZG81TVdSS2RSYmVueFpvMDlCRU1rbWk1R1BGRDJOc2VTbU5tWlFkVjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MTcwMTE0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzc3QzBFQTY3NzhBNDMzNkUwODgwOTc2MDU3QTQ0QUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MDE5NTg5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpULVlVSi10VGhpVWo0QnFScHc2S2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2ZlNWI0NjUtNGJhZi00YTI1LWI1NDEtNDJiYTVlM2VhNjJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDI0NyxcbiAgICAgIDEyNixcbiAgICAgIDE2NixcbiAgICAgIDQyLFxuICAgICAgMjUzLFxuICAgICAgMjUyLFxuICAgICAgMTk3LFxuICAgICAgMzQsXG4gICAgICAxNCxcbiAgICAgIDEwLFxuICAgICAgMjQwLFxuICAgICAgMTUsXG4gICAgICAyMCxcbiAgICAgIDExMSxcbiAgICAgIDIxNyxcbiAgICAgIDE2NyxcbiAgICAgIDEyNSxcbiAgICAgIDg2LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDIyNSxcbiAgICAgIDE3NCxcbiAgICAgIDgxLFxuICAgICAgMTcwLFxuICAgICAgMTU1LFxuICAgICAgNixcbiAgICAgIDU4LFxuICAgICAgMTM0LFxuICAgICAgNjYsXG4gICAgICAxNyxcbiAgICAgIDg3LFxuICAgICAgMTUzLFxuICAgICAgMTM4LFxuICAgICAgMTE2LFxuICAgICAgMjAsXG4gICAgICAyMTQsXG4gICAgICA4NixcbiAgICAgIDE4LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0tTVExZN1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzE3MDExNDE6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMjEzOTUyMzc3MDc2OjQ0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuS6l0tJTkcg5bmyw5hNSVnDheG5olUg8J+RkcujyrPhtYPigbHhtZfLolwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3MGxzY0dFTHI5dXJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRzkzOFVCenl3QjZEcWZEeDFkV1lsNVlFQzZGZ3ZxcG5OQ3NqMjBGZ2kzND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrZWlsdU5vajZSeGVBalFQc3ZiYmRBR3Bzb0RWQmYxb3k4YjBQWFltQVhFMHVLZDMzbXV6NnZHVFVVeDQ2ckxoWVlaUmpQQkVYOUp3QjR0cmI4VWxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpMkMvUVNncVRST0Z3ZEFzNk1MTHVWbkpmWXlzbG1wSk9FRlhjcE5TZml2RjUrckZnaldkRFVPTVFFaHN6bXE0RGk2Q0N3K1h6VzFWR1hnanVoY1pCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDcxNzAxMTQxOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwMTk1ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJY0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUljSy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💙" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BLUE DEMON",
  packname: process.env.PACK_NAME || "BLUE DEMON",
  botname : process.env.BOT_NAME  || "BLUE DEMON",
  ownername:process.env.OWNER_NAME|| "BLUE DEMON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLUE DEMON"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
