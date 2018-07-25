# traceify-node

[![NPM](https://nodei.co/npm/traceify-node.png)](https://nodei.co/npm/traceify-node/)

Node/Javascript client for the Traceify service on [opeNode.io](https://www.openode.io/traceify).

## Installation

```
npm install traceify-node
```

## Usage

As for the configurations, you need an opeNode *token* and *site_name*, both are available via
the administration dashboard on opeNode:

```
const traceify = require('traceify-node')({ token: "your token", site_name: "site name here" })
```

### Log with trace level

You can log a simple string:

```
traceify.trace("my simple string begin logged")
```

or a json:

```
traceify.trace({ complex: "obj" })
```

### Log with info level

You can log a simple string:

```
traceify.info("my simple string begin logged")
```

or a json:

```
traceify.info({ complex: "obj" })
```

### Log with warn level

You can log a simple string:

```
traceify.warn("my simple string begin logged")
```

or a json:

```
traceify.warn({ complex: "obj" })
```

### Log with debug level

You can log a simple string:

```
traceify.debug("my simple string begin logged")
```

or a json:

```
traceify.debug({ complex: "obj" })
```

### Log with error level

You can log a simple string:

```
traceify.error("my simple string begin logged")
```

or a json:

```
traceify.error({ complex: "obj" })
```

### Log with a custom level

You can log using a custom log level:

```
traceify.log("mylevel", "string or json")
```

## License

ISC
