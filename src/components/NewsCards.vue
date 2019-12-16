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
          <li :key="posts.id" v-for="posts in posts">
            <div bp="float-left 3@md offset-2@md" class="newsfield-section">
              <div bp="float-left">
                <img class="rightImage" :src="posts.newsimage" alt />
              </div>
              <div bp="container float-left" class="text-box">
                <h1 class="text">{{posts.textheader}}</h1>
                <span class="date">{{posts.date}}</span>
                <p>put your platforming skills to the test</p>
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
  @Prop({ required: true }) posts!: null;
}
</script>

<style scoped>
.content-section-header {
  background: #fff;
  padding: 17px;
  margin-bottom: 4px;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;

  width: 100%;
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
  margin-bottom: 4px;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
  width: 92%;
}
.newsfield-section {
  background: #fff;
  padding: 85px;
  margin-bottom: 4px;
  font-family: "proxima-nova", "Source Sans Pro", Helvetica, Arial, sans-serif;
  padding: 0%;
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
}
.rightImage {
  width: 130px;
  padding: 5px;
}

.text-box {
  width: 69%;
  height: 100%;
  margin-top: 10px;
  text-align: left;
}
.text {
  font-size: 18px;
  margin-top: -5px;
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
  font-size: 15px;
  color: black;
  text-align: left;
}
</style>