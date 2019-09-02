<template>
  <details><summary>{{title}}</summary>{{content}} </details>
</template>

<script>
export default {
  name: 'Details',
  props: {
    title: {
      type: String,
      default: "title"
    },
    content: {
      type: String,
      default: "title"
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="styl">
details {
  border-radius: 3px;
  background: #EEE;
}
details summary {
    font-size: 17px;
    vertical-align: top;
    background: #333;
    color: #FFF;
    border-radius: 3px;
    /* padding: 5px 10px; */
    padding: 5px 0px;
    outline: none;
    font-weight: bold;
}
</style>
