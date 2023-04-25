// .vuepress/components/mermaid.vue

<template>
  <div class="mermaid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mermaid',
  mounted() {
    import("mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });
      m.init();
    });
  }
};
</script>

