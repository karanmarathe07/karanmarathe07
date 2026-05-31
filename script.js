const fs = require('fs');
async function getIcon(name, color) {
  const res = await fetch('https://unpkg.com/simple-icons@v11/icons/' + name + '.svg');
  let text = await res.text();
  text = text.replace('<svg ', '<svg fill=\"' + color + '\" ');
  const b64 = Buffer.from(text).toString('base64');
  console.log(name + ': data:image/svg+xml;base64,' + b64);
}
async function run() {
  await getIcon('github', '#ffffff');
  await getIcon('linkedin', '#0077b5');
  await getIcon('gmail', '#ea4335');
}
run();
