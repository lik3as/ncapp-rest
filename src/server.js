const express = require('express');
const usr_router = require('./routes/users.js');
const cli_router = require('./routes/clients.js');
const item_router = require('./routes/items.js');
const nfe_router = require('./routes/nfes.js');
const cat_router = require('./routes/cats.js');
const cliType_router = require('./routes/cliTypes.js');
const itemEntry_router = require('./routes/itemEntries.js');
const itemEntryOfc_router = require('./routes/itemEntriesOfc.js');
const itemLeave_router = require('./routes/itemLeaves.js');
const itemState_router = require('./routes/itemStates.js');

const app = express();
app.set('port', 8080);
app.use(express.json());

/* ROUTERS */
app.use(usr_router);
app.use(cli_router);
app.use(item_router);
app.use(nfe_router);
app.use(cat_router);
app.use(cliType_router);
app.use(itemEntry_router);
app.use(itemEntryOfc_router);
app.use(itemLeave_router);
a
pp.use(itemState_router);
app.listen(app.get('port'), () => {
  console.log(`Server is Running at: ${app.get('port')}`);
});