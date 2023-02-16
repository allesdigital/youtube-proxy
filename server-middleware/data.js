const exec = require("node:util").promisify(require("node:child_process").exec);

export default async function (req, res) {
  const video_id = req.url.substr(1);
  const { stdout, stderr, error } = await exec(
    `/usr/bin/yt-dlp --dump-json 'https://www.youtube.com/watch?v=${video_id}'`
  );
  //console.info({ video_id, error, stdout, stderr });
  res.setHeader("content-type", "application/json").end(stdout);
}
