const express = require('express');
const router = express.Router();
const fs = require('fs');
const JsSearch = require('js-search');

let itemData = JSON.parse(fs.readFileSync('./data/updatedItemData.json'));

let searchItem = new JsSearch.Search('name');

searchItem.addIndex('name');
searchItem.addIndex('shortName');
searchItem.addDocuments(itemData);

router.get('/item', async (req, res) => {
  let searched = req.query.s;

  try {
    let bestMatch = searchItem.search(searched)[0];

    if (bestMatch) {
      let result = {
        name: bestMatch.name,
        shortName: bestMatch.shortName,
        description: bestMatch.description,
        icon: `https://gzwbot.eu/images/items/${bestMatch.imageName || 'notfound.webp'}`,
        properties: { ...bestMatch.properties }
      };

      res.json(result);
    } else {
      res.json(null);
    }
  } catch (error) {
    res.json(null);
    console.log(error);
  }
});

module.exports = router;