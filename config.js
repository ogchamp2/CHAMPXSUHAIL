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
global.caption = process.env.CAPTION || global.caption || "〔OG CHAMP〕√ !" 


global.devs = "22896342434" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "22896342434";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22896342434";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_08_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZei9hWEJNb2FwNUY5NVdsWklOYnFldlgvbXZrSnVsdkVIYzgwTkRhdWxZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtWW8zajVLZFQxLUR3VGE2MmV4NERBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkMjM0NTFiLWQ5NDYtNDNmNy1iZGNkLTlmZjZlNzZiMGQyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA3NSxcbiAgICAgIDE1NyxcbiAgICAgIDg0LFxuICAgICAgMTM4LFxuICAgICAgMTYyLFxuICAgICAgNDUsXG4gICAgICAxNjIsXG4gICAgICA5NyxcbiAgICAgIDIzNyxcbiAgICAgIDgxLFxuICAgICAgOTYsXG4gICAgICA0NCxcbiAgICAgIDI5LFxuICAgICAgODYsXG4gICAgICAxMTAsXG4gICAgICAxNyxcbiAgICAgIDk3LFxuICAgICAgMTU3LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgNDQsXG4gICAgICA0OSxcbiAgICAgIDIxMSxcbiAgICAgIDE1MixcbiAgICAgIDIwLFxuICAgICAgOTcsXG4gICAgICAyOCxcbiAgICAgIDE2NCxcbiAgICAgIDEwMyxcbiAgICAgIDQ5LFxuICAgICAgMTA1LFxuICAgICAgMTU4LFxuICAgICAgMjA4LFxuICAgICAgMjE0LFxuICAgICAgMTM5LFxuICAgICAgNjksXG4gICAgICAxMzcsXG4gICAgICAxNDYsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzdEUlkyRkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODk2MzQyNDM0OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44CUT0cgQ0hBTVDjgJXiiJpcIixcbiAgICBcImxpZFwiOiBcIjEwOTMyNDQxNjMxOTUyNTo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYjNtSjhFRUx2MXZyZ0dHQk1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhZTENJWVJlSStENDhVY3pzdHo4VFFuVGN4VXpDY0dWZWtIZC9tTU5lSE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnVKSlJoVitEaXhMYUFkWWZxT0N1Y3hsYjcxODBHVWlTV1RuMm84THd5dlRRbmhHOEVJUTdrM01ubUZpTnAwaEpPWGpSQ3lNS2xaaGxXL1pWSlhZQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR3FkUHJJTitYdHRpeVhvbGR0VmJoQkhwcjZ2Tk9zMUQ4NW0xL2ZCTWdCc2ltLzFBV1hqWXZhTHRnL1FyWW9nV2REQWNnZzUrNHVSL25wSTdvamoxaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTYzNDI0MzQ6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwODQwOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOb3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5veS5qc29uIjogIntcImtleURhdGFcIjpcImxGYXJNbnp5bXFwdjh3V0ZhSVkzR0NTcEZVTzRiSC9TbElzY0hxYmZmSGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzOTE2MjEwMixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💙" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 〔OG CHAMP〕√²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • 〔OG CHAMP〕√』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〔OG CHAMP〕√",
  packname: process.env.PACK_NAME || "〔OG CHAMP〕√",
  botname : process.env.BOT_NAME  || "〔OG CHAMP〕√",
  ownername:process.env.OWNER_NAME|| "〔OG CHAMP〕√",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "〔OG CHAMP〕√"  ).toUpperCase(),



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
