<template>
  <div id="container">
    <div id="layout" bp="flex">
      <!-- left nav -->
      <div bp="fit 1--max">
        <left-nav v-bind:sideNav="sideNav" />
      </div>

      <!-- thumbnails -->
      <div ref="scroll" bp="fill 13--max">
        <div>
          <!-- vue-grid-layout -->
          <div>
            <grid-layout
              class="content"
              :layout.sync="layout"
              :col-num="3"
              :row-height="8"
              :is-draggable="false"
              :is-resizable="false"
              :is-mirrored="false"
              :vertical-compact="true"
              :margin="[10, 10]"
              :use-css-transforms="false"
            >
              <grid-item
                class="grid box"
                v-for="item in grid"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
              >
                <img :src="item.i" alt class="images" />
                <div class="caption">
                  <p>{{item.caption}}</p>
                </div>
              </grid-item>
            </grid-layout>
          </div>
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
import { GridLayout, GridItem, GridItemData } from "vue-grid-layout";

interface Itypes {
  title: string;
  posts: string;
  texheader: string;
  caption: string;
}

interface Layout {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
}
@Component({
  components: {
    LeftNav,
    NewsCards,
    GridLayout,
    GridItem
  }
})
export default class MainSection extends Vue {
  sideNav: Object | Itypes = Object;
  news: Object | Itypes = Object;
  squarecaptions: Object | Itypes = Object;
  grid: Array<String> | Itypes = Array();
  layout: Layout[] = [];
  $refs!: {
    scroll: HTMLFormElement;
  };

  async mounted() {
    try {
      const response: AxiosResponse = await axios.get("/DataBase.json");
      console.log(`status of response is ${response.status}`);
      this.sideNav = response.data.sideNav;
      this.news = response.data.news;
      this.squarecaptions = response.data.squarecaptions;
      this.grid = response.data.thumbnails;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  scroll(event: any) {
    this.$refs.scroll.scrollTo(0, 0);
  }
}
</script>


<style scoped>
.images {
  height: 100%;
  width: auto;
  transform: scale(1.02) translate(-15px, 0px);
}
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
  bottom: -16px;
  width: 100%;
  padding: 17px 20px 12px -45px;
  background-color: rgba(0, 0, 0, 0.66);
  border-radius: 0px;
  text-align: left;
  margin: 15px 0px 0px 0px;
}
p {
  margin: 2px 0px 16px 0px;
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

.grid {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto-fit);
  grid-auto-flow: row;
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
  grid-auto-flow: dense;
}
@media only screen and (max-width: 650px) {
  .square {
    grid-column: 1/4;
  }
}
.tall {
  /* grid-column: 1/2;
  grid-row: 2/4; */
  grid-column: span;
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

.vue-grid-layout.content {
  width: 102%;
  top: -10px;
}
</style>