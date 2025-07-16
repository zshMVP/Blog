/* global hexo */

'use strict'

hexo.on('ready', () => {
  if (!/^(g|s)/.test(hexo.env.cmd)) return
  hexo.log.info(`

Your hexo-theme-A4 version is zshMVP_Modified.
`)
})