<template>
  <!--container-->
  <section class="container">

      <!-- transition -->
      <transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">

        <!--questionContainer-->
        <div class="questionContainer" v-if="questionIndex<quiz.questions.length" v-bind:key="questionIndex">
          <header>
            <div class="shell">
              <div class="bar" :style="{width: questionIndex/quiz.questions.length*100 + '%' }">
                <span>{{(questionIndex/quiz.questions.length)*100}}%</span>
              </div>
            </div>
          </header>
          <!--/progress-->

          <!-- questionTitle -->
          <h2 class="titleContainer title">{{ quiz.questions[questionIndex] && quiz.questions[questionIndex].text }}</h2>
          <!-- /questionTitle -->
          <!-- quizOptions -->
          <div class="optionContainer" v-if="quiz.questions[questionIndex]">
            <div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses" @click="selectOption(index)" :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
              {{ index | charIndex }}. {{ response.text || "Mpthasdng"}}
            </div>
          </div>

          <!--quizFooter: navigation and progress-->
          <footer class="questionFooter">

            <!--pagination-->
            <nav class="pagination" role="navigation" aria-label="pagination">

              <!-- back button -->
              <a class="button" v-on:click="prev();" :disabled="questionIndex < 1">
                      Back
                    </a>

              <!-- next button -->
              <a class="button" :class="(userResponses[questionIndex]==null)?'':'is-active'" v-on:click="next();" :disabled="questionIndex>=quiz.questions.length">
                {{ (userResponses[questionIndex]==null)?'Skip':'Next' }}
              </a>

            </nav>
            <!--/pagination-->

          </footer>
          <!--/quizFooter-->
          </div>
      <!--/questionBox-->
      <!--quizCompletedResult-->
    <div v-if="questionIndex >= quiz.questions.length" v-bind:key="questionIndex" class="quizCompleted has-text-centered">
      <!-- quizCompletedIcon: Achievement Icon -->
      <span class="icon">
        <i class="fa" :class="score() > 3 ?'fa-check-circle-o is-active':'fa-times-circle'"></i>
      </span>

      <!--resultTitleBlock-->
      <h2 class="title">
        You did {{ (score() / quiz.questions.length  > 0.7 ?'an amazing':(score() / quiz.questions.length < 0.4 ?'a poor':'a good')) }} job!
      </h2>
      <p class="subtitle">
        Total score: {{ score() }} / {{ quiz.questions.length }}
      </p>
        <br>
        <a class="button" @click="restart()">restart <i class="fa fa-refresh"></i></a>
      <!--/resultTitleBlock-->
    </div>
    </transition>
    <!--/quizCompetedResult-->
  </section>
  <!--/container-->
</template>

<script>
import * as quizzes from '../quizzes'
import Vue from 'vue';
export default {
  name: 'Quiz',
  props: {
    quizNum: Number
  },
  data() {
    let quizData 
    switch (this.quizNum) {
    case 1:
      quizData = quizzes.quiz1
      break
    case 2:
      quizData = quizzes.quiz2
      break
    default:
      quizData = quizzes.quiz1
      break
    }
    const userResponseSkelaton = Array(quizData.questions.length).fill(null);
    return {
      quiz: quizData,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false
    }
  },
  filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
  },
  methods: {
		 restart: function(){
        this.questionIndex=0;
		 		this.userResponses=Array(this.quiz.questions.length).fill(null);
		 },
      selectOption: function(index) {
         this.$set(this.userResponses, this.questionIndex, index);
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      prev: function() {
         if (this.quiz.questions.length > 0) this.questionIndex--;
      },
      // Return "true" count in userResponses
      score: function() {
         var score = 0;
         for (let i = 0; i < this.userResponses.length; i++) {
            if (
               typeof this.quiz.questions[i].responses[
                  this.userResponses[i]
               ] !== "undefined" &&
               this.quiz.questions[i].responses[this.userResponses[i]].correct
            ) {
               score = score + 1;
            }
         }
         // calculate percentage
         return score;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
.button {
  transition: 0.3s;
}
.title, .subtitle {
  font-family: Montserrat, sans-serif;
  font-weight: normal;
}
.animated {
  transition-duration: 0.15s;
}
.container {
  margin: 0 0.5rem;
  display: flex;
	align-items: center;
	justify-content: center;
}
.questionBox {
  max-width: 30rem;
  width: 30rem;
  min-height: 30rem;
  position: relative;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.questionContainer header {
  background-color: rgba(124, 32, 32, 0.025);
  background: rgba(124, 32, 32, 0.025);
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.questionContainer header h1 {
  font-weight: bold;
  margin-bottom: 1rem !important;
}
.progressContainer {
  width: 60%;
  margin: 0 auto;
}

.titleContainer {
  text-align: center;
  margin: 0 auto;
  padding: 1.5rem;
}
.quizForm {
  display: block;
  white-space: normal;
  height: 100%;
  width: 100%;
}
.quizForm .quizFormContainer {
  height: 100%;
  margin: 15px 18px;
}
.quizForm .quizFormContainer .field-label {
  text-align: left;
  margin-bottom: 0.5rem;
}
.quizCompleted {
  width: 100%;
  padding: 1rem;
  text-align: center;
}
.quizCompleted > .icon {
  color: #f86c6b;
  font-size: 5rem;
}
.quizCompleted > .icon .is-active {
  color: #4dbd74;
}
.questionContainer {
  white-space: normal;
  height: 100%;
  width: 100%;
}
.questionContainer .optionContainer {
  margin-top: 12px;
  flex-grow: 1;
}
.questionContainer .optionContainer .option {
  border-radius: 290486px;
  padding: 9px 18px;
  margin: 0 18px;
  margin-bottom: 12px;
  transition: 0.3s;
  cursor: pointer;
  background-color: #73818f;
  color: #f0f3f5;
  border: transparent 1px solid;
}
.questionContainer .optionContainer .option.is-selected {
  border-color: rgba(0, 0, 0, 0.25);
  background-color: #834c9d;
}
.questionContainer .optionContainer .option:hover {
  background-color: #B589D6;
}
.questionContainer .optionContainer .option:active {
  transform: scaleX(0.9);
}
.questionContainer .questionFooter {
  background: rgba(0, 0, 0, 0.025);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  align-self: flex-end;
}
.questionContainer .questionFooter .pagination {
  margin: 15px 25px;
}
.pagination {
  display: flex;
  justify-content: space-between;
}
.button {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;
  transition: 0.3s;
}
.button:hover {
  cursor: pointer;
  background: #552586;
  border-color: rgba(0, 0, 0, 0.25);
}
.button.is-active {
  background: #834c9d;
  color: white;
  border-color: transparent;
}
.button.is-active:hover {
  background: #0a2ffe;
}
@media screen and (min-width: 769px) {
  .questionBox {
    align-items: center;
    justify-content: center;
  }
  .questionContainer {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 768px) {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}

/** Custom Progress bar */
.shell {
  height: 20px;
  width: 250px;
  border: 1px solid #73818f;
  border-radius: 13px;
  padding: 3px;
  margin: 0 auto;
}
.bar {
  background: linear-gradient(to right, #B589D6, #804FB3);
  height: 20px;
  width: 15px;
  border-radius: 9px;
}
.bar span {
  float: right;
  padding: 4px 5px;
  color: #f0f3f5;
  font-size: 0.7em;
}
</style>
