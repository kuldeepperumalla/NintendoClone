<template>
  <div>
    <side-thumbnails v-bind:posts="posts" />
    <news-thumbnails v-bind:posts="posts" />
    <div id="content">
      <div class="one box">
        <img class="image1" src="img/thumbnail1.jpg" alt  />

        <!-- <div class="caption">
          <p class="mosaic-caption-linktext" style="text-align: left;">
            Enter now to win Nintendo Switch prizes!
            <svg
              style="width: 8px; height: 8px; "
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              xml:space="preserve"
            >
              <path
                fill="#fff"
                d="M47.973,24a3.927,3.927,0,0,1-1.113,2.753L26.846,46.862a3.825,3.825,0,0,1-5.427,0L20.062,45.5a3.87,3.87,0,0,1,0-5.454L35.98,24,20.062,7.947a3.87,3.87,0,0,1,0-5.454l1.357-1.364a3.824,3.824,0,0,1,5.427,0L46.86,21.242A4.175,4.175,0,0,1,47.973,24ZM29.035,24a3.926,3.926,0,0,1-1.113,2.753L7.908,46.862a3.825,3.825,0,0,1-5.428,0L1.124,45.5a3.87,3.87,0,0,1,0-5.454L17.042,24,1.124,7.947a3.87,3.87,0,0,1,0-5.454L2.481,1.129a3.825,3.825,0,0,1,5.428,0L27.922,21.242A4.174,4.174,0,0,1,29.035,24Z"
              />
            </svg>
          </p>
        </div>-->
      </div>
      <div class="two box">
        <img class="image1" src="img/thumbnail2.jpg" alt />
      </div>
      <div class="three box">
        <img class="image1" src="img/thumbnail3.jpg" alt />
      </div>
      <div class="four box">
        <img class="image1" src="img/thumbnail4.jpg" alt />
      </div>
      <div class="five box">
        <img class="image1" src="img/thumbnail5.jpg" alt />
      </div>
      <div class="five box">
        <img class="image1" src="img/thumbnail6.jpg" alt />
      </div>
      <div class="six box">
        <img class="image1" src="img/thumbnail7.jpg" alt />
      </div>
      <div class="three">three</div>
      <div class="four">four</div>
      <div class="five">five</div>
      <div class="two">two</div>
      <div class="five">five</div>
      <div class="six">six</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import sideThumbnails from "./sideThumbnails.vue";
import newsThumbnails from "./newsThumbnails.vue";
import axios, { AxiosResponse } from "axios";
interface Itypes {
  id: number;
  image: URL;
  title: string;
  posts: string;
  texheader: string;
}
@Component({
  components: {
    sideThumbnails,
    newsThumbnails
  }
})
export default class Test extends Vue {
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
.texton {
  position: absolute;
  top: 68%;
  line-height: 15px;
  padding: 6px;
  width: 20%;
  font-size: 14px;
}
/* .caption {
  padding: 12px;
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px 20px 12px;
  background-color: rgba(0, 0, 0, 0.66);
} */
#content {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(270px, auto);
  grid-gap: 2px;
  display: grid;
  max-width: 840px;
  margin: 87px;
  margin-top: 70px;
  overflow: hidden;
}

#content div {
  /* background: #333; */
  /* padding: 30px; */
  border-radius: 5px 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: -8px;
}

.two {
  grid-column: 1/1;
  grid-row: 2/4;
}

.six {
  grid-column: 2/4;
}
.one {
  overflow: hidden;
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