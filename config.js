const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22575285416";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_48_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRc3o5dUs3TTZ5RmJJQWJ6dUJ5akFjU25ZdGhzWE03RnhGdDc4VnFSaUpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvS1d4b2dRU1RlR3FvaThmbnUwbDZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkZDdmMDI4LTYxNDYtNDEwNC05OTAzLWQ5YWI5ODVjYmZmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDIyMCxcbiAgICAgIDE2OSxcbiAgICAgIDI2LFxuICAgICAgNDUsXG4gICAgICAxNTksXG4gICAgICA1NyxcbiAgICAgIDE0MCxcbiAgICAgIDQsXG4gICAgICAxNTUsXG4gICAgICA1NCxcbiAgICAgIDk2LFxuICAgICAgMjE2LFxuICAgICAgMTcwLFxuICAgICAgMjQyLFxuICAgICAgMjUwLFxuICAgICAgODQsXG4gICAgICAxMjksXG4gICAgICAyMTksXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAyMjksXG4gICAgICA3MSxcbiAgICAgIDY5LFxuICAgICAgMTMsXG4gICAgICAxMTQsXG4gICAgICAxOSxcbiAgICAgIDM2LFxuICAgICAgMjE2LFxuICAgICAgMTgyLFxuICAgICAgMTQ0LFxuICAgICAgNzQsXG4gICAgICAyNDEsXG4gICAgICAxMjgsXG4gICAgICAxMjIsXG4gICAgICAyMTIsXG4gICAgICAyNTQsXG4gICAgICA4MixcbiAgICAgIDI4LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE1TEFTNDdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU3NTI4NTQxNjo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIvwnZCo8J2QrvCdkKTwnZCs8J2QqPCdkKcg8J2QlPCdkLPwnZCu8J2QpvCdkJrwnZCk8J2QolwiLFxuICAgIFwibGlkXCI6IFwiNTk2MDYwNTk0OTU2NTI6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCtSMzhrR0VJSDJuYlFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwTXp1RE1pbStteXBRdm9qaVFrZ3B5d2VpMW4yMWRwMUtncFZnNGlENEhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRsa3FLNmt1VXpmWkxud1hqb24rSTdjL1pFeUMxbDhvR29TU0w3cEcyZ093RkZ6Wnp3VWlneUZQNjJTNDVxUFc5Uy80VjlIN25vL1RyeThmYTFLbkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlKYUk0UjZEaXI5VUQwRzFJQkx4OFN2Q0N1L1pYK3k1NnMzdnE4TW8yL3hLWkYwRzZXRU9vV1lHazFQMU9SVTBOL080U0NFczFWbFgzU3RzTEcySWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTc1Mjg1NDE2OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTU0ODg1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



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
