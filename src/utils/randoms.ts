import fs from 'fs';

export const randomText = () => {
  const texts = fs.readFileSync(`${__dirname}/names.txt`, 'utf8').split('\n');
  return texts[Math.floor(Math.random() * texts.length)];
};

export const randomNumber = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));

export const randomPhone = () => {
  let phone = '0';
  for (let i = 0; i < 10; i++) {
    const numb = Math.floor(Math.random() * 10);
    phone += String(numb);
  }
  return phone;
};
