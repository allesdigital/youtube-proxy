const ytvProxy = require("./ytv-proxy.js");

test("prefix", async () => {
  expect(ytvProxy.prefix).toBe("/ytv~*/");
});

describe("handler", () => {
  const handler = ytvProxy.handler;

  test("target", async () => {
    expect(handler.target).toBe("https://*.googlevideo.com");
  });

  test("change origin", async () => {
    expect(handler.changeOrigin).toBe(true);
  });

  describe("rr5---sn-h0jeenld", () => {
    const path = "/ytv~rr5---sn-h0jeenld/videoplayback?dummy=param";
    const target = "https://rr5---sn-h0jeenld.googlevideo.com";

    test("router", async () => {
      expect(handler.router({ url: path })).toBe(target);
    });

    test("path rewrite", async () => {
      expect(handler.pathRewrite(path)).toBe("/videoplayback?dummy=param");
    });
  });

  describe("rr2---sn-h0jelne6", () => {
    const path = "/ytv~rr2---sn-h0jelne6/videoplayback?dummy=param";
    const target = "https://rr2---sn-h0jelne6.googlevideo.com";

    test("router", async () => {
      expect(handler.router({ url: path })).toBe(target);
    });

    test("path rewrite", async () => {
      expect(handler.pathRewrite(path)).toBe("/videoplayback?dummy=param");
    });
  });
});
