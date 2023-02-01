const indexR = require("./index");
const advisorsR=require("./advisorRoute");
const diseaseR=require("./diseaseRoute");
const postsR=require("./postsRoute");
const usersR=require("./usersRoute");
const couponsR=require("./couponsRoute");


exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/advisors" , advisorsR);
  app.use("/disease" , diseaseR);
  app.use("/posts" , postsR);
  app.use("/users" , usersR);
  app.use("/coupons" , couponsR);


}