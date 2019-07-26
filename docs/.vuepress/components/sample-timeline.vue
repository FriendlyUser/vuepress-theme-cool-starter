// .vuepress/components/sample-timeline.vue
<template>
  <timeline timeline-theme="lightblue">
    <timeline-title bg-color="#09FFAA">Prehistoric hunters cross over into Canada from Asia</timeline-title>
    <timeline-item bg-color="#9dd8e0">	Leif Ericsson leads a Viking expedition to the New World</timeline-item>
    <timeline-item bg-color="#9dFFe0">First Year 1B</timeline-item>
    <timeline-item bg-color="#FFF000">Accepted Computer Engineering</timeline-item>
    <timeline-item bg-color="#cFe8eF">The Iroquois Confederacy is formed</timeline-item>
    <timeline-item bg-color="#97Aec8">John Cabot reaches Newfoundland (or perhaps Cape Breton)</timeline-item>
    <timeline-item bg-color="#5744D4">Jacques Cartier first explores the St. Lawrence region</timeline-item>
    <timeline-item bg-color="#0F4859">Second Year 2B</timeline-item>
    <timeline-item bg-color="#094341">Samuel de Champlain establishes a French colony at Québec City</timeline-item>
    <timeline-item bg-color="#825F03">Hudson’s Bay Company is formed</timeline-item>
    <timeline-item bg-color="#954F08">Expulsion of the Acadians</timeline-item>
    <timeline-item bg-color="#A71490">Battle of the Plains of Abraham: Québec City is captured</timeline-item>
    <timeline-item bg-color="#C084A9">New France is formally ceded to Britain; Pontiac Rebellion erupts</timeline-item>
    <timeline-item bg-color="#7B71C2">Loyalist refugees begin arriving after the American Revolution</timeline-item>
    <timeline-item bg-color="#2348B1">War of 1812: U.S. invades Canada</timeline-item>
    <timeline-item bg-color="#915F15">Rebellions against British rule in Upper and Lower Canada</timeline-item>
    <timeline-item bg-color="#0909FA">	Responsible government is won, first in Nova Scotia, then in Canada</timeline-item>
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