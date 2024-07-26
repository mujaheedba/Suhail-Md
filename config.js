const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mujaheedbadamasi022:##$$081Mu@mujaheedtech.uye0czb.mongodb.net/?retryWrites=true&w=majority&appName=Mujaheedtech
"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/M1DG25Q/images.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY 𝙕𝞢𝞒𝞗𝘿𝞓𝙔𝞠𝞖𝞓𝞜𝙏𝞗𝞛 DREAM BOY 🥰" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348113204566";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348113204566,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348113204566,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_07_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdJWnF1YWo1VGJXUkxCZlZ5VHhUNTM1ZHRqNnNGRUNqbGJXLzRMNE5iMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdXVGdPc1dZUko2ZEliSlBoWTFMUGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTZhNDUxZGQtNDU4Zi00NTM3LTg5N2ItYTQwZWNiZWU2MjFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDExNCxcbiAgICAgIDE1NixcbiAgICAgIDE2NCxcbiAgICAgIDE0NSxcbiAgICAgIDU5LFxuICAgICAgMjMxLFxuICAgICAgMTQ2LFxuICAgICAgNTcsXG4gICAgICAyOCxcbiAgICAgIDIxNCxcbiAgICAgIDE5MixcbiAgICAgIDE2MyxcbiAgICAgIDEzMyxcbiAgICAgIDIzMixcbiAgICAgIDE3LFxuICAgICAgMTQ5LFxuICAgICAgMTM1LFxuICAgICAgMjMyLFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMjU0LFxuICAgICAgMjQ0LFxuICAgICAgMTc3LFxuICAgICAgNDUsXG4gICAgICA5NixcbiAgICAgIDExNixcbiAgICAgIDQ0LFxuICAgICAgMTksXG4gICAgICAyMTUsXG4gICAgICAxODYsXG4gICAgICAxMDAsXG4gICAgICA5OCxcbiAgICAgIDI0MyxcbiAgICAgIDIsXG4gICAgICAyNyxcbiAgICAgIDMyLFxuICAgICAgMTY1LFxuICAgICAgMTU3LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVlSMU5CSk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTMyMDQ1NjY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk0NjMxNDUwNjgxNTU1OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056bWlwNEdFTkNYNWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWHBDNm1TY1lScTd2cnY2V29xVm8xek5nVmQxOTF5eFBpaUg3MGx4b04xVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzUk02Tkphb0cxeDNGYjZ0dnQwYkVINXhPRXVQdlJZS2ZsUlRmbUYzaHBqQXBIcDE3VjYvVUdUR1pDdEZwQlFCTzZEOVhvMXU2ck03N3BGVG9hejNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLMnpXdVQwK2FhMWdCOEsybC9BTnhtclFOeExOeDVQZ2lLZ1hZTnBuU1NiTE9rMDQrMngvam00RjVhRU1GV2Z4d25tSVZaUFVhVU1uZ3gvRlh4cy9BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTEzMjA0NTY2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMjI0NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1kdi5qc29uIjogIntcImtleURhdGFcIjpcIlZ5TFo4NFFGK1RCdDIvVDYvZW8reE5lcnM3TVpCejlkTWI2eUNDcFRRSzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3MzcwNDI4MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 powered by 𝙕𝞢𝞒𝞗𝘿𝞓𝙔𝞠𝞖𝞓𝞜𝙏𝞗𝞛 dream boy 🥰 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZeroDayPhantom Bot",
  ownername:process.env.OWNER_NAME|| "𝙕𝞢𝞒𝞗𝘿𝞓𝙔𝞠𝞖𝞓𝞜𝙏𝞗𝞛 💀💀💀",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝙕𝞢𝞒𝞗𝘿𝞓𝙔𝞠𝞖𝞓𝞜𝙏𝞗𝞛 💀💀💀"  ).toUpperCase(),



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
