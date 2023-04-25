<template>
  <div>
    <p class="intro">
      {{ intro }}
    </p>
    <div class="comparison">
      <div class="comparison__container">
        <div class="comparison__heading">
          <i class="material-icons blue-text">check</i>
          Pros
        </div>
        <ul>
          <li
            v-for="item in good"
            :key="item"
            :inner-html.prop="item"
          />
        </ul>
      </div>

      <div class="comparison__container comparison__container--donts">
        <div class="comparison__heading comparison__heading--donts">
          <i class="material-icons">close</i>
          Cons
        </div>
        <ul>
          <li
            v-for="item in bad"
            :key="item"
            :inner-html.prop="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pros-cons',
  props: {
    intro: {
      type: String,
      required: true,
    },
    good: {
      type: Array,
      default: null,
    },
    bad: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped lang='stylus'>

.intro
  margin 0
  font-weight $fw-bold
.comparison
  display flex
  margin-top 1.5rem
  &__container
    width 50%
    padding-left 1.5rem
    margin-bottom 1.5em
    border-top 4px solid  blue(#000, 255)
    &--donts
      border-color red(#000, 255)
  &__heading
    margin-top 38px
    margin-bottom 28px
    font-size $fs-1
    font-weight $fw-bold
    color blue(#000, 255)
    display flex
    align-items center
    &--donts
      color red(#000, 255)
  &__icon
    margin-right 0.5rem
    height 24px
  li
    margin-bottom $base-sizing
    padding-left 0
    font-size $fs-2
    line-height 1.33rem
    list-style-type initial
    text-indent 0
</style>