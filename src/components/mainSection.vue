<template>
  <div id="container">
    <div id="layout" bp="flex">
      <!-- left nav -->
      <div bp="fit 1--max">
        <left-nav v-bind:sideNav="sideNav" />
      </div>

      <div ref="scroll" bp="fill 13--max">
        <div class="content">
          <!-- square images -->
          <div
            :key="squareimages.id"
            v-for="(squareimages, index) in squareimages"
            class="square box"
          >
            <img class="image1" :src="squareimages.thumbnails" alt />

            <!-- captions with index-->
            <div v-if="index === 0" class="caption">
              <p class="overlaptext-caption-linktext" style>
                {{squareimages.caption}}
                <img class="svgicon" src="caption.svg" alt />
              </p>
            </div>

            <div v-if="index === 3" class="captionNoBg">
              <p class="overlaptext-caption-linktext" style>
                {{squareimages.caption}}
                <img class="svgicon" src="caption.svg" alt />
              </p>
            </div>

            <div v-if="index === 4" class="captionNoBg">
              <p class="overlaptext-caption-linktext" style>
                {{squareimages.caption}}
                <img class="svgicon" src="caption.svg" alt />
              </p>
            </div>
          </div>

          <!-- tall images -->
          <div :key="tallimages.id" v-for="tallimages in tallimages" class="tall box">
            <img class="image1" :src="tallimages.tallthumbnail" alt />
          </div>

          <!-- wide image -->
          <div :key="wide.id" v-for="(wide, index) in wideimages" class="wide box">
            <img class="image1" :src="wide.widethumbnail" alt />

            <!-- captions with index -->
            <div class="caption">
              <p v-if="index === 0" class="overlaptext-caption-linktext" style>
                {{wide.caption}}
                <img class="svgiconWide" src="caption.svg" alt />
              </p>
            </div>
          </div>

          <!-- top button -->
          <a href title="Go to Top">
            <div @click="scroll" id="mainNavTop">
              <img src="top.svg" alt="top" />
            </div>
          </a>
        </div>
      </div>

      <!-- news cards -->
      <div bp="fit 6--max">
        <news-cards v-bind:news="news" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftNav from "./LeftNav.vue";
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
    LeftNav,
    NewsCards
  }
})
export default class MainSection extends Vue {
  sideNav: Object | Itypes = Object;
  squareimages: Object = Object;
  tallimages: Object = Object;
  wideimages: Object = Object;
  news: Object = Object;
  squarecaptions: Object = Object;

  $refs!: {
    scroll: HTMLFormElement;
  };

  async mounted() {
    try {
      const response: AxiosResponse = await axios.get("/DataBase.json");
      console.log(`status of response is ${response.status}`);
      this.sideNav = response.data.sideNav;
      this.squareimages = response.data.squareimages;
      this.tallimages = response.data.tallimages;
      this.wideimages = response.data.wideimages;
      this.news = response.data.news;
      this.squarecaptions = response.data.squarecaptions;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  scroll(event: any) {
    this.$refs.scroll.scrollTo(0, 0);

    // console.log("clicked");
  }
}
</script>


<style scoped>
* {
  color: #fff;
  font-family: "Nunito Semibold";
  text-align: center;
  scroll-behavior: smooth;
}
html {
  scroll-behavior: smooth;
}

#mainNavTop {
  width: 28px;
  height: 28px;
  display: block;
  position: absolute;
  bottom: 0px;
  left: 30px;
  background: #fff;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 8px;
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
  border-radius: 0px;
  text-align: center;
}
p.overlaptext {
  margin: 0;
  margin-bottom: 2px;
}
.overlaptext-caption-linktext {
  font-size: 12px;
  margin: 0;
  padding: 0px;
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
.content {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 5px;
  display: grid;
  max-width: 100%;
  margin-top: 0px;
  padding: 0 0 0 20px;
}
@media only screen and (max-width: 650px) {
  .content {
    padding: 0 5px 0 10px;
  }
}

.content .box {
  border-radius: 5px 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: -8px;
}

.square {
  position: relative;
}
@media only screen and (max-width: 650px) {
  .square {
    grid-column: 1/4;
  }
}
.tall {
  grid-column: 1/1;
  grid-row: 2/4;
}

@media only screen and (max-width: 650px) {
  .tall {
    grid-column: 1/4;
    /* grid-row: 1/4; */
  }
}
.wide {
  grid-column: 2/4;
  grid-auto-rows: 2/4;
  position: relative;
}

@media only screen and (max-width: 650px) {
  .wide {
    grid-column: 1/4;
    /* grid-row: 1/4; */
  }
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