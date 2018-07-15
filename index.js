
const request = require('request')

const version = "v1"
const mainUrl = "https://traceify.openode.io"

function _get(path, opts = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: mainUrl + path,
      method: 'GET',
      strictSSL: false,
      headers: {
        "content-type": "application/json",
        "x-auth-token": opts.token
      }
    }

    request(options, function (error, response, body) {
      if ( ! error && response.statusCode == 200) {
        resolve(body)
      } else {
        reject(error || body)
      }
    })
  })
}

function _post(path, content, opts = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: mainUrl + path,
      method: 'POST',
      strictSSL: false,
      json: content,
      headers: {
        "content-type": "application/json",
        "x-auth-token": opts.token
      }
    }

    request(options, function (error, response, body) {
      if ( ! error && response.statusCode == 200) {
        resolve(body)
      } else {
        reject(error || body)
      }
    })
  })
}

function _patch(path, content, opts = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: mainUrl + path,
      method: 'PATCH',
      strictSSL: false,
      json: content,
      headers: {
        "content-type": "application/json",
        "x-auth-token": opts.token
      }
    }

    request(options, function (error, response, body) {
      if ( ! error && response.statusCode == 200) {
        resolve(body)
      } else {
        reject(error || body)
      }
    })
  })
}

function _delete(path, opts = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: mainUrl + path,
      method: 'DELETE',
      strictSSL: false,
      headers: {
        "content-type": "application/json",
        "x-auth-token": opts.token
      }
    }

    request(options, function (error, response, body) {
      if ( ! error && response.statusCode == 200) {
        resolve(body)
      } else {
        reject(error || body)
      }
    })
  })
}

function _log(level, content, opts = {}) {
  return _post(`/api/${version}/instances/${opts.site_name}/${level}/log`, content, opts)
}

function _search(content, opts = {}) {
  return _post(`/api/${version}/instances/${opts.site_name}/search`, content, opts)
}

module.exports = function(opts = {}) {
  return {
    log: function(level, content) {
      return _log(level, content, opts)
    },

    info: function(content) {
      return _log("info", content, opts)
    },

    warn: function(content) {
      return _log("warn", content, opts)
    },

    error: function(content) {
      return _log("error", content, opts)
    },

    debug: function(content) {
      return _log("debug", content, opts)
    },

    trace: function(content) {
      return _log("trace", content, opts)
    },

    search: function(content) {
      return _search(content, opts)
    },

    customRequest: {
      get: function(path) {
        return _get(`/api/${version}/${path}`, opts)
      },

      post: function(path, content) {
        return _post(`/api/${version}/${path}`, content, opts)
      },

      patch: function(path, content) {
        return _patch(`/api/${version}/${path}`, content, opts)
      },

      delete: function(path) {
        return _delete(`/api/${version}/${path}`, opts)
      }
    }
  }
}
