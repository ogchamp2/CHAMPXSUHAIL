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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_57_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJKQnZRbGUwMEZaWmp1NXpsK1IxdGUwQzFpSGhFY3NnSm1qa2NOSWlqOFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhsVHp5MFpwVFpxVlExMmtHcS1QTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzI0MDYwMGUtMTEyYi00ODZhLWEzODctMGZmNGY4N2Y4NTAzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMTA5LFxuICAgICAgMTAzLFxuICAgICAgNTEsXG4gICAgICAyMDYsXG4gICAgICAxMjcsXG4gICAgICAyMSxcbiAgICAgIDIwMCxcbiAgICAgIDgsXG4gICAgICAyNDMsXG4gICAgICAxNDMsXG4gICAgICAxODEsXG4gICAgICA5NixcbiAgICAgIDIxNixcbiAgICAgIDY4LFxuICAgICAgMjI0LFxuICAgICAgMTgsXG4gICAgICAxNjksXG4gICAgICAxMDMsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTMsXG4gICAgICAyLFxuICAgICAgMjEwLFxuICAgICAgODAsXG4gICAgICA5MSxcbiAgICAgIDIzLFxuICAgICAgNzcsXG4gICAgICAxMTMsXG4gICAgICAyMTksXG4gICAgICAyNDQsXG4gICAgICAyMzUsXG4gICAgICAxMTMsXG4gICAgICAxMDcsXG4gICAgICA3OCxcbiAgICAgIDE1NixcbiAgICAgIDc5LFxuICAgICAgNTUsXG4gICAgICA5NCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSzFBUEExUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNDMzMzUwMzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImtpbmcgd2VzZVwiLFxuICAgIFwibGlkXCI6IFwiMTcwMDQxNjE0NTAxOTc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRLbnN3RUVMN2w0N2dHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYMHZPYjBYbkQyT0Z3T2FtVndxTHlmd2xNTWU1MkIzU1NTS3FxRkV4RFVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlmQ055ZDR6RzBndGtPZW9TQ25Ba3lXOFVIaDlySW9CdERoUWxMVi9JY2N6NktkRjBaQzBLTmp4ZkZXajdFSm5SVUxoZW1abW42MTNIM2FYNDZkaUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkp0VXZCZkY2MWlJcXlFUmZkK3E2aytwQkRUbDQ4V2R3K09wWHNPSXlCSm96c3hCUk9mTUdEdjl4ZEFRdGNrNWhmeVEyNEt2TldKSUlBNFBxWUhGTENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDQzMzM1MDM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTY4ODI1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxIclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEhyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVWhiS21VUEN2V043dHlJNHRaZWdQZ2g3aDZLWWZiZG9lR0FGKzN3S3kxTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMzNjI2NDUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgwNTc2NTU1NTBcIn0iCn0="  // PUT your SESSION_ID 


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
