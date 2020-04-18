#!/bin/bash
# Basic if statement
if [ "$TRAVIS_REPO_SLUG" = "FriendlyUser/vuepress-theme-cool-starter" ]
then
  echo google.com, pub-2479144310234386, DIRECT, f08c47fec0942fa0 > ads.txt
  sed -i '14i [ "script", { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "data-ad-client": "ca-pub-2479144310234386", async: true } ]' docs/.vuepress/config.js
fi