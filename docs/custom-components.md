---
title: Custom Components
---

# Tables

<my-component/>

## Table Component Code

The code for table component is listed below 
```vue
<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
     />
  </div>
</template>

<script>
import Styles from './Styles'
export default {
  name: 'my-component',
  // add to component
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>
```

Since package css cannot be important inside an component, another component is needed

```js
<script>
import "vue-good-table/dist/vue-good-table.css";

export default {
  name: "Styles",
};
</script>

<style>
</style>
``` 

## TimeLine

An example timeline of the courses I took

<sample-timeline/>

Nice timeline :rocket:



## Comparsion 

```js
<pros-cons
  intro="There are a couple of things we need to cover:"
  :good="[
    'Documentation Theme Based on Vue.',
    'Use of markdown-it plugins.',
    'Static Site Generator.'
  ]"
  :bad="[
    'Vuepress is not very stable yet',
    'Can be complex to configure',
  ]"
/>
```
<pros-cons
  intro="There are a couple of things we need to cover:"
  :good="[
    'Documentation Theme Based on Vue.',
    'Use of markdown-it plugins.',
    'Static Site Generator.'
  ]"
  :bad="[
    'Vuepress is not very stable yet',
    'Can be complex to configure',
  ]"
/>

## Admonition Task List 

Tasks can be made using 

```
- [ ] incomplete
- [x] complete
```

!!! danger Major Backlog
The tasks listed below are expected to be done by the end of the term ENGR 004, haha?.
- [ ] cool [firebase Vue Dapp](https://medium.com/@sebinatx/building-an-ethereum-firebase-user-profile-dapp-part-2-226bcc11ae62, ), typescript
- [x] Soldiity contracts repo for games, explaining how to use then and more. Also, use solcdoc to make markdoown files and a script for latex/vuepress to include the source? 
- [ ] Update the Blockchain notes repo.
- [x] When making the solidity contracts use boostnote minus the admonitions, but write the code in either js or solidity and use [Pandoc Markdown Code Blocks in LaTeX](http://weibeld.net/markdown/pandoc_code_blocks.html) with a custom pandoc template. Idk, don't really care about documenting smart contracts.
- [x] update python script to probably with jinja based format and maybe latex output.
- [ ] [Building a chat bot with Nest.js and Dialogflow](https://pusher.com/tutorials/chat-bot-nestjs), extend this app. and look at [How to Build a Vue.js Chat App with ChatEngine | PubNub](https://www.pubnub.com/tutorials/chatengine/vuejs/chat-app/)
- [ ] Dash application to track ethereum stats and hashgraph
- [x] Update the Bchain application, Vue-Dapp and finish a basic IPFS app using a box.
- [ ] Ability to upload sites to ipfs and look into cloudiary
- [x] Build a basic scrappy bot for reddit, host on scrappy hub and maybe even send data to apis. Used Rss feeds instead.
- [ ] Consider using [GitHub - thomasreinecke/git-playbook: GIT Playbook is a documentation framework that allows you to create Documentation for your project using Markdown and GH-Pages rapidly](https://github.com/thomasreinecke/git-playbook) as a good final repo for all of my documentation, particularly when it comes to searching for things. 
!!!

## Badges <p class="badge warning">Warning</p> 

<badge class="warning">warning </badge>


<span class="badge badge-default">New</span>

<span class="badge error">ERROR</span>
$x^2=4$

$$x^5 = 5$$

## Build-in admonitions <Badge vertical="middle">Middle badge</Badge>

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger STOP
This is a dangerous warning
:::

Some other good examples can be found at https://vuepress-examples.netlify.com/

## ReadMe

This is an example of how to use the `vuepress-theme-cool` vuepress theme, look into docs for example files.

## Installation and Running

To install:

`npm install`

To run:

`npm run docs:dev`


## Customization

Most of the customization is done in `config.js`, automatic navbar and sidebar navigation is available in `config-other.js`