var express = require('express');
var router = express.Router();
var peopleController = require('../controllers/people.js');
 
/*
 * GET
 */
router.get('/', peopleController.list);
 
/*
 * GET
 */
router.get('/:id', peopleController.show);
 
/*
 * POST
 */
router.post('/', peopleController.create);
 
/*
 * PUT
 */
router.put('/:id', peopleController.update);
 
/*
 * DELETE
 */
router.delete('/:id', peopleController.remove);
 
module.exports = router;