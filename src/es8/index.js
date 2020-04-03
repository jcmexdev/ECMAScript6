const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
};

const entries = Object.entries(data);
const key = Object.keys(data);
const values = Object.values(data);
console.log(entries);
console.log(key);
console.log(values);

//String padding
const hello = 'hello';
console.log(hello.padStart(7, 'hi'));
console.log(hello.padEnd(12, '---'));

const obj = {
  name: 'juan' //esta coma del final indica que puede o no existir otro elemento después
};

// async y await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.error(error);
  }
};

helloAsync();
