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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_08_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVJSUEYrdFRMK1BVVkpTYk95TGt3WFh1N3VhbHlSejB1R1FxTmNDUXYxOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTNyNzY3WGNTVC1ub1hScURWWTBXZ1wiLFxuICBcInBob25lSWRcIjogXCI0MmUyZGI3NS0wOGVkLTQwYWQtOTRlNC04YjY4MzY5MWEwMDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTkzLFxuICAgICAgMjAsXG4gICAgICA0OSxcbiAgICAgIDE2OCxcbiAgICAgIDg0LFxuICAgICAgMjQsXG4gICAgICAzNCxcbiAgICAgIDEzMSxcbiAgICAgIDE0OCxcbiAgICAgIDUsXG4gICAgICA2MSxcbiAgICAgIDE3NCxcbiAgICAgIDI0OCxcbiAgICAgIDE0OSxcbiAgICAgIDIyOSxcbiAgICAgIDIyOSxcbiAgICAgIDIzMixcbiAgICAgIDEwOCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxMjksXG4gICAgICA2NSxcbiAgICAgIDQ0LFxuICAgICAgMTg1LFxuICAgICAgMzIsXG4gICAgICAzMyxcbiAgICAgIDE2MSxcbiAgICAgIDE3MyxcbiAgICAgIDU2LFxuICAgICAgMTcwLFxuICAgICAgMTksXG4gICAgICAxMDEsXG4gICAgICAxMzUsXG4gICAgICAxOCxcbiAgICAgIDk5LFxuICAgICAgMTczLFxuICAgICAgMTg3LFxuICAgICAgMTM3LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpFOUpQRjROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZsfCdmbvwnZqE8J2ZtCDwnZmz8J2ZtPCdmbzwnZm+8J2ZvSDwnZqH8J2agfCdmbDwnZm48J2ag/CdmoJcIixcbiAgICBcImxpZFwiOiBcIjIxNDYxNTU3MzE0MzcxMjo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS0R6L01IRUpYWnZyZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhXNmovVzRTWExBOHJvTzJTY3lRaE1DeEtoVE8yc3BEeEViTlBXVERLaHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOXdQYkxOa3V1UVZpTFo2dDA4ZmpWMk9pVHBia3ZyTXNocXNka3kzbGY4MFZzaTU0V2pIUkV5MndZNmdHa1VodUhJTmlsaTZ6V3YxTVZUQmxUTXlvQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMHBrbGo2bzAvY2VOMktmc2RLYnRyNG1KMVkrMnJZZFVyVURzeHFNeEt2RE1ac0l3QWsvU241WmJmS29pcVJscjk1bWNQc0wrUFl1TFpYSUlkTHFOZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MTAzOTM2Nzo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTA4MDQ3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUppbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmlsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSDd5MVBycEk3b1E0RGxCRzFkTEpWRC9mOEIrdFRwYnRqN2YwKy9ncGhHaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTIxNTE1NDkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg5NDQwMTgwMDlcIn0iCn0="  // PUT your SESSION_ID 


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
