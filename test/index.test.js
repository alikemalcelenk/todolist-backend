/* globals describe, it */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')

const should = chai.should()

chai.use(chaiHttp)

describe('/ test', () => {
  it('it should GET the homepage', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })
})
