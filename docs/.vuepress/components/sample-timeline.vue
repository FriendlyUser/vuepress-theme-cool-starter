// .vuepress/components/sample-timeline.vue
<template>
  <timeline timeline-theme="lightblue">
    <timeline-title bg-color="#09FFAA">Road to Graduation</timeline-title>
    <timeline-item bg-color="#9dd8e0">First Year 1A</timeline-item>
    <timeline-item bg-color="#9dFFe0">First Year 1B</timeline-item>
    <timeline-item bg-color="#FFF000">Accepted Computer Engineering</timeline-item>
    <timeline-item bg-color="#cFe8eF">ENGR 1C (extra courses)</timeline-item>
    <timeline-item bg-color="#97Aec8">Second Year 2A</timeline-item>
    <timeline-item bg-color="#5744D4">ENGR 2.5</timeline-item>
    <timeline-item bg-color="#0F4859">Second Year 2B</timeline-item>
    <timeline-item bg-color="#094341">ENGR 001</timeline-item>
    <timeline-item bg-color="#825F03">ENGR 002</timeline-item>
    <timeline-item bg-color="#954F08">Third Year (3 classes)</timeline-item>
    <timeline-item bg-color="#A71490">Third Year 3B</timeline-item>
    <timeline-item bg-color="#C084A9">Third Year 3A</timeline-item>
    <timeline-item bg-color="#7B71C2">ENGR 003</timeline-item>
    <timeline-item bg-color="#2348B1">ENGR 004</timeline-item>
    <timeline-item bg-color="#915F15">Fourth Year 4B</timeline-item>
    <timeline-item bg-color="#0909FA">Fourth Year 4A</timeline-item>
  </timeline>
</template>
 
<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
 
export default {
  name: 'sample-timeline',
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
  }
}
</script>