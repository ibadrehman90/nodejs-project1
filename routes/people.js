const express = require ('express')
const router = express.Router()
const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')


// how to read data

router.get('/' ,getPeople )

// how to add data for javascrip method

router.post('/' ,createPerson )

// PUT method
router.put('/:id', updatePerson);

// Delete method
router.delete('/:id',deletePerson );

// we can also do like where the route is same

// router.route('/').get(getPeople).post(createPerson)

module.exports = router