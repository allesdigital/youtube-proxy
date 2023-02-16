const Fs = require("fs");
const Ajv = require("ajv");

const ajv = new Ajv({ allErrors: true });

const schema = {
  type: "object",
  required: [
    "id",
    "title",
    "thumbnail",
    "description",
    "duration",
    "view_count",
    "webpage_url",
    "urls",
    "_type",
    "_version",
  ],
  properties: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    thumbnail: {
      type: "string",
      pattern: "^https://i.ytimg.com/vi(_webp)?/",
    },
    description: {
      type: "string",
    },
    duration: {
      type: "number",
    },
    view_count: {
      type: "number",
    },
    webpage_url: {
      type: "string",
      pattern: "^https://www.youtube.com/watch?",
    },
    urls: {
      type: "string",
      pattern: "^https://.+.googlevideo.com/videoplayback?",
    },
    _type: {
      const: "video",
    },
    _version: {
      type: "object",
      required: [
        "version",
        "current_git_head",
        "release_git_head",
        "repository",
      ],
      properties: {
        version: {
          const: "2023.01.06",
        },
        current_git_head: {
          type: "null",
        },
        release_git_head: {
          const: "6becd25",
        },
        repository: {
          const: "yt-dlp/yt-dlp",
        },
      },
    },
  },
};

const validate = ajv.compile(schema);

test("DBXH9jJRaDk", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/DBXH9jJRaDk.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("TTnFpKCAJtE", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/TTnFpKCAJtE.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("VbeM8Lf7s5A", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/VbeM8Lf7s5A.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("abQ8LkHb2pw", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/abQ8LkHb2pw.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("bDrq4kpDwG4", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/bDrq4kpDwG4.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("dQw4w9WgXcQ", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/dQw4w9WgXcQ.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("t65tbfU9sCI", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/t65tbfU9sCI.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("wReaR5NS8Y0", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/wReaR5NS8Y0.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});

test("wReaR5NS8Y0_embed", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/wReaR5NS8Y0_embed.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
