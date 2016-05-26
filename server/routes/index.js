var express = require('express');
var router = express.Router();
var ctrlPerson = require('../controllers/person');

/* GET home page. */
router.get('/', ctrlPerson.personList);

/* add simple home page. */
router.post('/', ctrlPerson.newPerson);

/* delete simple */
router.get('/delete/:id', ctrlPerson.deletePerson);

module.exports = router;
