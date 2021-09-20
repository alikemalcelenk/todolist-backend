/* globals describe, it */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')

const should = chai.should()
chai.use(chaiHttp)

let taskId

describe('/task tests', () => {
  describe('GET /task', () => {
    it('it should GET all the tasks', (done) => {
      chai
        .request(server)
        .get('/task')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('tasks')
          done()
        })
    })
  })

  describe('POST /task', () => {
    it('it should CREATE a task', (done) => {
      const task = {
        description: 'mocha post test'
      }

      chai
        .request(server)
        .post('/task')
        .send(task)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('task')
          res.body.task.should.have.property('_id')
          res.body.task.should.have
            .property('description')
            .eql(task.description)
          res.body.task.should.have.property('isCompleted')
          res.body.task.should.have.property('created_at')
          taskId = res.body.task._id
          done()
        })
    })
  })

  describe('PUT /task/:id', () => {
    it('it should UPDATE a task by id', (done) => {
      const task = {
        isCompleted: true,
        description: 'mocha put test'
      }

      chai
        .request(server)
        .put(`/task/${taskId}`)
        .send(task)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('task')
          res.body.task.should.have.property('_id').eql(taskId)
          res.body.task.should.have
            .property('description')
            .eql(task.description)
          res.body.task.should.have
            .property('isCompleted')
            .eql(task.isCompleted)
          res.body.task.should.have.property('created_at')
          taskId = res.body.task._id
          done()
        })
    })
  })

  describe('DELETE /task/:id', () => {
    it('it should DELETE the task by id', (done) => {
      chai
        .request(server)
        .delete(`/task/${taskId}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('task')
          res.body.task.should.have.property('_id').eql(taskId)
          res.body.task.should.have.property('description')
          res.body.task.should.have.property('isCompleted')
          res.body.task.should.have.property('created_at')
          done()
        })
    })
  })
})
