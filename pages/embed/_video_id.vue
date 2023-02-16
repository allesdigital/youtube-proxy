<template>
  <video controls :poster="clean(video.thumbnail)">
    <source
      v-for="source in video._sources"
      :src="proxy(source.url)"
      :type="'video/' + source.ext"
      :_format="source.format"
    />

    <p>
      Sorry, your browser doesn't support embedded videos. You can always
      <a :href="video.webpage_url">watch the original video on YouTube</a>.
    </p>
  </video>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    clean: (url) => {
      const { pathname, search } = new URL(url);
      return pathname + search;
    },
    proxy: (url) => {
      const { host, pathname, search } = new URL(url);
      return "/ytv~" + host.split(".")[0] + pathname + search;
    },
  },
  async asyncData({ params, $axios }) {
    const video = await $axios.$get("http://localhost/data/" + params.video_id);

    video._sources = video.formats.filter(
      ({ vcodec, acodec }) => vcodec != "none" && acodec != "none"
    );
    video._sources.reverse();

    return { video };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
video {
  display: block;
  width: 100%;
}
</style>
