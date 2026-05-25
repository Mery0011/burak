//import moment from 'moment'; (ModuleJS) const moment = require('moment');(CommonJS)

import dotenv from "dotenv";
dotenv.config();

console.log("PORT:", process.env.PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);

// CLUSTER=> DATABASE=> COLLECTION=> DOCUMENT