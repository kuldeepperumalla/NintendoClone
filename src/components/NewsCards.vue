<template>
  <div>
    <div bp="float-right " class="newsContainer">
      <div>
        <div class="content-section-header">
          <div class="content-section-header__container">
            <p class="content-section-header__title">Latest news</p>
          </div>
        </div>
        <ul>
          <li :key="news.id" v-for="news in news">
            <div bp="float-left 3@md offset-2@md" class="newsfield-section">
              <div class="thumnail" bp="float-left">
                <img class="rightImage" :src="news.thumbnail" alt />
              </div>
              <div bp="container float-left" class="text-box">
                <h1 class="text">{{news.heading}}</h1>
                <span class="date">{{news.date}}</span>
                <p>Put your platforming skills to the test</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NewsThumbnail extends Vue {
  @Prop({ required: true }) news!: Object;
}
</script>

<style scoped>
* {
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
}
.content-section-header {
  background: #fff;
  padding: 17px;
  margin-bottom: 4px;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;

  width: 100%;
}
.thumbnail {
  display: inline-block;
}
p.content-section-header__title {
  margin: 0;
  font-size: 22px;
  color: #333;
  font-weight: 700;
  line-height: 1.139;
}

.content-section-header__container {
  border-left: #f4f4f4 solid 4px;
  height: 100%;
  padding: 8px;
}
.newsContainer {
  width: 100%;
  margin-top: 10px;
  padding: 0 0 0 8px;
}
.content-section-header {
  background: #fff;
  padding: 17px;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
  width: 92%;
  margin: 0px 15px;
}
.newsfield-section {
  background: #fff;

  margin-bottom: 4px;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
}

.news-items {
  margin: 0;
  font-size: 22px;
  color: #333;
  font-weight: 700;
  line-height: 1.139;
  text-align: left;
}
li {
  text-decoration: none;
  list-style: none;
}

.newsfield-section {
  transform: translate(-39.5px, -12px);
  width: 100%;
  padding: 10px 0px;
  margin: 2px 15px;
}
.rightImage {
  width: 130px;
  padding: 5px;
}

.text-box {
  width: 100%;
  height: 100%;
  display: contents;
  text-align: left;
}
.text {
  font-size: 18px;
  margin: 0px;

  font-family: unset;
  line-height: 25px;
  color: #333;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
}
.date {
  font-size: 12px;
  text-align: left;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
  /* transform: inherit; */
  color: lightslategray;
}
p {
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 13.1px;
  color: #333333;
  text-align: left;
  margin: 0;
  font-weight: normal;
  letter-spacing: 0.6px;
  line-height: 1.4;
}
@media only screen and (max-width: 1150px) {
  * {
    display: none;
  }
}
</style>