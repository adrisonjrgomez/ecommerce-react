
const config = () => {
  const apiKey = process.env;
  console.log(apiKey);
  return {
    apiKey: apiKey,
    authDomain: "ecommerce-reactjs-fe17a.firebaseapp.com",
    databaseURL: "https://ecommerce-reactjs-fe17a.firebaseio.com",
    projectId: "ecommerce-reactjs-fe17a",
    storageBucket: "ecommerce-reactjs-fe17a.appspot.com",
    messagingSenderId: "203105989564",
    appId: "1:203105989564:web:02acf89c76628fe25431b9"
  };
}

export default config;