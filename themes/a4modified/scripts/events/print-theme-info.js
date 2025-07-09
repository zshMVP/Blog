/* global hexo */

'use strict'

hexo.on('ready', () => {
  if (!/^(g|s)/.test(hexo.env.cmd)) return
  hexo.log.info(`

Welcome.
----------------------------------------------------------------
   ___  ____
  / _ |/ / /
 / __ /_  _/
/_/ |_|/_/                                 Reading and Writing.
-----------------------------------------------------------------
Your hexo-theme-A4 version is zshMVP_Modified.
-----------------------------------------------------------------
`)
})