const expect = require('expect.js');
const index = require("../index.js");
const nock = require("nock");

describe('Traceify', function() {

  describe('log', function() {
    it("should log properly", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/instances/hello/info/log')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).log('info', { titi: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })
  })

  describe('info', function() {
    it("should log properly", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/instances/hello/info/log')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).info({ titi: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })
  })

  describe('warn', function() {
    it("should log properly", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/instances/hello/warn/log')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).warn({ titi: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })
  })

  describe('error', function() {
    it("should log properly", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/instances/hello/error/log')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).error({ titi: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })
  })

  describe('debug', function() {
    it("should log properly", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/instances/hello/debug/log')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).debug({ titi: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })
  })

  describe('search', function() {
    it("should search properly", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/instances/hello/all/search')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).search('all', { search: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })
  })

  describe('customRequest', function() {
    it("post", function(done) {
      nock('https://traceify.openode.io')
        .post('/api/v1/hello_world')
        .reply(200, {
          "result": "success"
         });

      index({token: 'test', site_name: 'hello'}).customRequest.post('hello_world', { search: 'logg' }).then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })

    it("delete", function(done) {
      nock('https://traceify.openode.io')
        .delete('/api/v1/hello_world')
        .reply(200, {});

      index({token: 'test', site_name: 'hello'}).customRequest.delete('hello_world').then((result) => {
        done()
      }).catch((err) => {
        done(err)
      })
    })

  })
})
