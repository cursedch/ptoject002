import readline from 'readline';
import { exec } from 'child_process';
import { Client, GatewayIntentBits, Collection } from 'discord.js';

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
];
const client = new Client({ intents });

function open(pk, ac) {
  exec(`am start -n "${pk}/${ac}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening ${error.message}`);
      return;
    }
  });
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var premode = false;
var bd = false;

client.on('ready', () => {
  console.log(client.user.tag + ' is online!');
  bd = true
})

rl.on('line', (input) => {
  const args = input.split(/ +/);
  const command = args[0].toLowerCase();

  if (command === 'login') {
    if (premode === false) {
      rl.question('USERNAME : ', (username) => {
        if (username === 'xwxowe4678x') {
          rl.question('PASSWORD : ', (password) => {
            if (password === 'ft17112009') {
              premode = true;
              console.log('เข้าสู่ระบบสำเร็จแล้ว!');
            } else {
              console.log('รหัสไม่ถูกต้อง');
            }
          });
        } else {
          console.log('ชื่อผู้ใช้ไม่ถูกต้อง!');
        }
      });
    } else if (premode === true) {
      console.log('คุณได้ทำการเข้าสู่ระบบไปแล้ว!');
    } else {
      console.log('พบข้อผิดพลาดที่ไม่รู้จัก!');
    }
  }
  
  else if (command === 'run'){
    if(args[1] === 'test2.js'){
      exec('npm install git', (error, stdout, stderr) => {if (error) {console.error(`Error: ${error.message}`);return;}if (stderr) {console.error(`stderr: ${stderr}`);return;}console.log(`${stdout}`);});
    }else{console.log(`ไม่พบรายการ ${args[1]}`)}
  }
  
  else if(command === 'o'){
    if(args[1] === 'chrome'){
      open("com.android.chrome", "com.google.android.apps.chrome.Main");
    }else{console.log("ไม่พบแอป")}
  }
  
  else if(command === 'bd'){
    if(args[1] === 'start'){
      rl.question('TOKEN : ', (a) => {
        client.login(`${a}`)
      })
    }
  }
  
  else if (command === 'exit') {
    console.log('Exiting program.');
    rl.close();
  } else {
    console.log(`"${command}" this command not found!`);
  }
});


rl.on('close', () => {
  console.log('Program closed.');
  process.exit();
});
