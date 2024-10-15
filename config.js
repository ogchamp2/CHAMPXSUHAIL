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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,22896342434";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_51_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTEzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoM0xpbzFUU2dIeEVaN3hYYkYyQm5RYStkQlpCSmJEYXJyWnhEc2Q5cENvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyODk2MzQyNDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOTFGMzA4NEY4MEVDRTI2NEFDQzI4OEMzMDg3REMzNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg5NzUxMTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRDBoMWlZc1pSbkt1NVRVMVZJTEdSUVwiLFxuICBcInBob25lSWRcIjogXCJkNjJhNjgyOS1jOGI2LTRiYzctOTRlNi00YmQxOWExZGIyNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxNTMsXG4gICAgICA3OSxcbiAgICAgIDc0LFxuICAgICAgMjMxLFxuICAgICAgNzcsXG4gICAgICAxMzcsXG4gICAgICAyMTksXG4gICAgICAyMTcsXG4gICAgICA5NixcbiAgICAgIDI2LFxuICAgICAgMyxcbiAgICAgIDQ2LFxuICAgICAgMjEsXG4gICAgICAxMzMsXG4gICAgICAyMjEsXG4gICAgICAzNixcbiAgICAgIDE5MixcbiAgICAgIDQ4LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgMTM5LFxuICAgICAgMjA3LFxuICAgICAgMjMzLFxuICAgICAgMjAwLFxuICAgICAgOTIsXG4gICAgICAyNDgsXG4gICAgICAyMTMsXG4gICAgICAxMjMsXG4gICAgICA3LFxuICAgICAgNjEsXG4gICAgICAxNjYsXG4gICAgICAxNDEsXG4gICAgICAyNCxcbiAgICAgIDE4NCxcbiAgICAgIDc4LFxuICAgICAgMTg4LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkJFSE1DRFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODk2MzQyNDM0OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44CUT0cgQ0hBTVDjgJXiiJpcIixcbiAgICBcImxpZFwiOiBcIjEwOTMyNDQxNjMxOTUyNTo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYjNtSjhFRVAyaHVMZ0dHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhZTENJWVJlSStENDhVY3pzdHo4VFFuVGN4VXpDY0dWZWtIZC9tTU5lSE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT2FQSzYzaXVWTTc4K2xqUmFTdWVtMHZGbXh0am5BN3h1MTVjazJGT0xVeHZ5STNWNTVWcU1FRHJFKzE2VnIxTDY4K3hyd2R1Wi9nTDFIcFY2YUZVRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFNyUmNjQyt3TS9jM2d5SEJMWStBWHpkY3A5RllxcUUxOGQ1VjE0cUNjVnEwa2g3MmdxS3VWZWgyc3RQRjRzL2RzTEgxbUxJMkdkZmltejVRbG41Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTYzNDI0MzQ6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg5NzUxMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOb3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5veS5qc29uIjogIntcImtleURhdGFcIjpcImxGYXJNbnp5bXFwdjh3V0ZhSVkzR0NTcEZVTzRiSC9TbElzY0hxYmZmSGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzOTE2MjEwMixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
