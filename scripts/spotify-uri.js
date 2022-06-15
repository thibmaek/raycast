#!/usr/bin/env node

// @raycast.schemaVersion 1
// @raycast.title Spotify URI
// @raycast.mode compact
// @raycast.packageName com.thibmaek.spotify_uri
// @raycast.icon https://www.scdn.co/i/_global/favicon.png
// @raycast.argument1 { "type": "text", "placeholder": "https://open.spotify.com/album/..." }

// Documentation:
// @raycast.description Get a Spotify URI from a URL
// @raycast.author Thibault Maekelbergh
// @raycast.authorURL https://github.com/thibmaek

const child_proc = require("child_process");

function toClipboard(data) {
  const proc = child_proc.spawn("pbcopy");
  proc.stdin.write(data);
  proc.stdin.end();
}

const [url] = process.argv.slice(2);
const uri = url.replace("https://open.spotify.com/", "").replace("/", ":");
const [u] = uri.split("?");

console.log(`spotify-ripper spotify:${u}`);
