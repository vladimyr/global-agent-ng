# global-agent-ng

[![build status](https://badgen.net/travis/vladimyr/global-agent-ng/master)](https://travis-ci.com/vladimyr/global-agent-ng)
[![install size](https://badgen.net/packagephobia/install/global-agent-ng)](https://packagephobia.now.sh/result?p=global-agent-ng)
[![npm package version](https://badgen.net/npm/v/global-agent-ng)](https://npm.im/global-agent-ng)
[![github license](https://badgen.net/github/license/vladimyr/global-agent-ng)](https://github.com/vladimyr/global-agent-ng/blob/master/LICENSE)
[![js semistandard style](https://badgen.net/badge/code%20style/semistandard/pink)](https://github.com/Flet/semistandard)

> Opinionated wrapper around [`global-agent`](https://github.com/gajus/global-agent)

## Installation

    npm install global-agent-ng

## Usage

As early as possible in your application, require and configure `global-agent-ng`.

```js
require('global-agent-ng').config();
```

### Preload

You can use the `-r, --require` [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload `global-agent-ng`. By doing this, you do not need to require and load `global-agent-ng` in your application code.

    node -r global-agent-ng/config script.js

### Configure `global-agent-ng` using environment variables

The following environment variables are respected by `global-agent-ng`:

-   `HTTP_PROXY` / `http_proxy`
-   `HTTPS_PROXY` / `https_proxy`
-   `NO_PROXY` / `no_proxy`

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [exports.agent](#exportsagent)
-   [exports.isProxying](#exportsisproxying)
-   [config](#config)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [ProxyAgentConfig](#proxyagentconfig)
-   [ProxyAgent](#proxyagent)

### exports.agent

global proxy agent instance

Type: [ProxyAgent](#proxyagent)

### exports.isProxying

proxying status

Type: [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### config

Bootstrap global proxy agent

#### Parameters

-   `options` **[ProxyAgentConfig](#proxyagentconfig)** global proxy agent configuration

#### Examples

```javascript
// Bootstrap global proxy agent
require('global-agent-ng').config();
//=> true

// Global proxy agent is already bootstrapped
require('global-agent-ng').config();
//=> false
```

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** bootstraping result

### ProxyAgentConfig

-   **See: <https://github.com/gajus/global-agent#createglobalproxyagent>
    **

### ProxyAgent

-   **See: <https://github.com/gajus/global-agent#globalglobal_agent>
    **
