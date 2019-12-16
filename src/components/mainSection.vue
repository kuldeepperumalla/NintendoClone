<template>
  <div id="container">
    <div id="layout" bp="flex">
      <div bp="fit 1--max">
        <right-nav v-bind:posts="posts" />
      </div>

      <div bp="fill 13--max">
        <div id="content">
          <div class="square box">
            <img class="image1" src="img/thumbnail1.jpg" alt />
            <div class="caption">
              <p
                :key="id"
                v-for="(posts, id) in posts"
                class="overlaptext-caption-linktext"
                style
              >{{posts.caption1}}</p>
              <img class="svgicon" src="caption.svg" alt />
            </div>
          </div>

          <div class="tall box">
            <img class="image1" src="img/thumbnail2.jpg" alt />
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail3.jpg" alt />
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail4.jpg" alt />
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail5.jpg" alt />
            <div class="captionNoBg">
              <p class="overlaptext-caption-linktext">
                Begin your journey in Galar!
                <img class="svgicon" src="caption.svg" alt />
              </p>
            </div>
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail6.jpg" alt />
            <div class="captionNoBg">
              <p class="overlaptext-caption-linktext">
                Check into the Last Resort!
                <img class="svgicon" src="caption.svg" alt />
              </p>
            </div>
          </div>

          <div class="wide box">
            <img class="image1" src="img/thumbnail7.jpg" alt />
            <div class="caption">
              <p class="overlaptext-caption-linktext" style>
                Kick off your fitness adventure!
                <img class="svgiconWide" src="caption.svg" alt />
              </p>
            </div>
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail8.jpg" alt />
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail9.jpg" alt />
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail12.jpg" alt />
          </div>

          <div class="square box">
            <img class="image1" src="img/thumbnail10.jpg" alt />
          </div>

          <div class="wide box">
            <img class="image1" src="img/thumbnail11.jpg" alt />
          </div>
        </div>
      </div>

      <div bp="fit 6--max">
        <news-cards v-bind:posts="posts" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RightNav from "./RightNav.vue";
import NewsCards from "./NewsCards.vue";
import axios, { AxiosResponse } from "axios";
interface Itypes {
  id: number;
  image: URL;
  title: string;
  posts: string;
  texheader: string;
  caption1: string;
}
@Component({
  components: {
    RightNav,
    NewsCards
  }
})
export default class imageSection extends Vue {
  posts: null | Itypes = null;

  async mounted() {
    // console.log(this.posts);
    try {
      const response: AxiosResponse = await axios.get("/images.json");
      console.log(`status of response is ${response.status}`);
      this.posts = response.data.Data;
      console.log(this.posts);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>


<style scoped>
* {
  color: #fff;
  font-family: "Nunito Semibold";
  text-align: center;
}
.caption {
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px 20px 12px;
  background-color: rgba(0, 0, 0, 0.66);
  border-radius: 0px;
  text-align: left;
}

.captionNoBg {
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px 20px 12px;
  /* background-color: rgba(0, 0, 0, 0.66); */
  border-radius: 0px;
  text-align: center;
}
p.overlaptext {
  margin: 0;
  margin-bottom: 2px;
}
.overlaptext-caption-linktext {
  font-size: 12px;
  margin-bottom: 9px;
  margin-top: 6px;
  text-transform: uppercase;
  line-height: 1;
}

.svgicon {
  width: 2%;
}

.svgiconWide {
  width: 1%;
}
#container {
  height: calc(100vh - 72px);
}
#layout {
  height: 100%;
  overflow-y: scroll;
}
#content {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(270px, auto);
  grid-gap: 2px;
  display: grid;
  max-width: 100%;
  margin-top: 0px;
  padding: 0 0 0 8px;
}

#content div {
  border-radius: 5px 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: -8px;
}

.square {
  overflow: hidden;
  position: relative;
}
.tall {
  grid-column: 1/1;
  grid-row: 2/4;
}
.wide {
  grid-column: 2/4;
  position: relative;
}
img.image1 {
  width: 100%;
  transform: scale(1.04);
}
.box {
  transition: 0.3s ease-in-out;
}
.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>