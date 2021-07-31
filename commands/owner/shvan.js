const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: "blackman",
        description: "BlackMan Is Her",
        accessableby: "Bot Owner",
        category: "owner",
        aliases: ["bm"],
        usage: 'blackman <input>'
    },
    run: async (bot, message, args) => {
        function clean(text) {
            if (typeof text === "string")
                return text
                    .replace(/`/g, "`" + String.fromCharCode(8203))
                    .replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
        }
        let owner = '701546840063082601'

        if (!owner.includes(message.author.id)) return;

        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            message.react("✅");
            var emb = new MessageEmbed()
                .setTitle('Result')
                .setDescription(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``)
                .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
                .setColor(0xd26a0e)
            message.channel.send(emb);
        } catch (err) {
            message.react("⚠");
            var emb = new MessageEmbed()
                .setTitle('Result')
                .setDescription(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``)
                .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
                .setColor(0xd26a0e)
            message.channel.send(emb);
        }
    }
}
