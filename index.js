'use strict';

const { bootstrap } = require('global-agent');

/**
 * @name exports.agent
 * @description global proxy agent instance
 * @type {ProxyAgent}
 */
exports.agent = null;
/**
 * @name exports.isProxying
 * @description proxying status
 * @type {Boolean}
 */
exports.isProxying = false;
exports.config = config;

/**
 * Bootstrap global proxy agent
 * @param {ProxyAgentConfig} options global proxy agent configuration
 * @returns {Boolean} bootstraping result
 * @example
 * // Bootstrap global proxy agent
 * require('global-agent-ng').config();
 * //=> true
 *
 * // Global proxy agent is already bootstrapped
 * require('global-agent-ng').config();
 * //=> false
 */
function config(options) {
  const result = bootstrap(options);
  const globalAgent = global.GLOBAL_AGENT;
  if (!globalAgent) return result;
  delete global.GLOBAL_AGENT;
  exports.agent = setup(globalAgent);
  exports.isProxying = true;
  return result;
}

function setup(globalAgent) {
  globalAgent.HTTP_PROXY = globalAgent.HTTP_PROXY || getEnvVar(['HTTP_PROXY', 'http_proxy']);
  globalAgent.HTTPS_PROXY = globalAgent.HTTPS_PROXY || getEnvVar(['HTTPS_PROXY', 'https_proxy']);
  globalAgent.NO_PROXY = globalAgent.NO_PROXY || getEnvVar(['NO_PROXY', 'no_proxy']);
  return globalAgent;
}

function getEnvVar(names = []) {
  const name = names.find(name => process.env[name]);
  if (!name) return;
  const value = process.env[name];
  // NOTE: Do NOT alter library behaviour!
  // See https://github.com/gajus/global-agent/tree/c663c62#what-is-the-reason-global-agentbootstrap-does-not-use-http_proxy
  delete process.env[name];
  return value;
}

/**
 * @name ProxyAgentConfig
 * @typedef {import('@types/global-agent').ProxyAgentConfigurationInputType} ProxyAgentConfig
 * @see {@link https://github.com/gajus/global-agent#createglobalproxyagent}
 */

/**
 * @name ProxyAgent
 * @typedef {import('@types/global-agent').ProxyAgentConfigurationType} ProxyAgent
 * @see {@link https://github.com/gajus/global-agent#globalglobal_agent}
 */
