// simple play command
module.exports = {
  name: "play",
  $if: "old",
  code: `
$playTrack[$message;youtube]
$if[$hasPlayer==false]
$joinVc
$endif

Now playing **$message**...
`


}
