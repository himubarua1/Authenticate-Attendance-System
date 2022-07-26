const router = require('express').Router();
const userController = require('../controller/users');






/**
 * Get user by id or email
 */

 router.get('/:userId', userController.getUserByID);


 /**
 * update user by id
 * @method put
 */

router.put('/:userId', userController.putUserById);


 /**
 * update user by id
 * @method patch
 */

  router.patch('/:userId', userController.patchUserById);


/**
 * delete user by id 
 */

 router.delete('/:userId', userController.deleteUserById);


// - Get all users, include
// - filter
// - sort
// - pagination
// - select properties
// - @route /api/users?sort=['by', 'name']
// - @method GET
// - @visivility private


router.get('/', userController.getUsers);

/**
 * create a new user
 */

router.post('/', userController.postUser);


 


module.exports = router;