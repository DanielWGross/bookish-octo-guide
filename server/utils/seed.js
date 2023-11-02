const db = require('../config/connection');
const models = require('../models');
const profileSeeds = require('./profileSeeds.json');

async function cleanDB(modelName, collectionName) {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles');
    await models.Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});