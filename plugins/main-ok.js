let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f4ff2dcf458c7b871dd4e.png', m, { packname: "𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕", author: "@𝙍𝙄𝘿𝙃𝙊" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
