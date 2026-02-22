require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Burkina Faso, Boulsa";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '22653058877';
global.ownername = process.env.OWNER_NAME || 'Abdoul Aziz Damiba';
global.botname = process.env.BOT_NAME || 'Dziguen fuku skae de Damiba';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker De';
global.author = process.env.AUTHOR || 'Abdoul Aziz Damiba\n\nContact: +22653058877';
// Default settings 2
global.wm = process.env.WM || "Youtube @Dziguenfuku";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Travail successfully! maintenant je veux une bière 🍻',
    prem: '⚠️ Access denied. cette possibilité est permise uniquement aux utilisateurs VIP de DAMIBA.',
    admin: '⚠️ privilège de créateur vous êtes exclus.',
    botAdmin: '⚠️ je veux être administrateur avant de valider la commande.',
    owner: '⛔ Commande réservée à AZIZ 😐.',
    group: 'ℹ️ cette commande ne peut être utilisée que dans un groupe.',
    private: 'ℹ️ viens en privée exécuter cette commande voici la condition de Damiba.',
    wait: '⏳ Dziguen traite votre demande ... Patientez un moment moment.',
    error: '❌ une erreur a été détecté si le problème persiste contactez aziz.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
