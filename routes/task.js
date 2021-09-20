const router = require('express').Router()
const taskController = require('../controllers/task')
const taskValidation = require('../controllers/middleware/validation/task')

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - description
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the task
 *         description:
 *           type: string
 *           description: The task title
 *         isCompleted:
 *           type: boolean
 *           description: Did the task complete?
 *         created_at:
 *           type: date
 *           description: Created date of the task
 *       example:
 *         _id: 607352f10179b40015e33956
 *         description: Visit dentist
 *         isCompleted: false
 *         created_at: 2021-09-20T10:03:32.217+00:00
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 */

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                description:
 *                   type: string
 *     responses:
 *       200:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
router.post('/', taskValidation.add, taskController.add)

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Return the list of all the tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *          description: Some error happened
 */
router.get('/', taskController.get)

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Update the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                description:
 *                   type: string
 *                isCompleted:
 *                   type: boolean
 *
 *     responses:
 *       200:
 *         description: The task was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
router.put('/:id', taskValidation.update, taskController.update)

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Delete the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: The task was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
router.delete('/:id', taskValidation.delete, taskController.delete)

module.exports = router
