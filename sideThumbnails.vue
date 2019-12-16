<template>
  <div class="main">
    <div class="sidebar">
      <div bp="grid 6@lg">
        <div bp="2--max full-width-until@sm">
          <ul>
            <li :key="id" v-for="(post, id) in posts">
              <div class="row subMenuContainer" v-on:click="handleClick">
                <span class="mainN">
                  <div class="rowCorner">
                    <img src="rowCurve.svg" alt />
                  </div>
                  <div class="icon">
                    <img v-bind:src="post.iconsvg" />
                  </div>
                </span>
                <!-- <p>Nintendo switch family</p> -->
                <p>{{post.title}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <a href="#top" title="Go to Top">
        <div id="mainNavTop" class="hidden-xs">
          <svg
            style="width: 12px; height: 12px; transform: rotate(180deg);"
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
              fill="#BF0010"
              d="M24,38.5c-1,0-2-0.4-2.8-1.1l-20.1-20c-1.5-1.5-1.5-3.9,0-5.4l0,0l1.4-1.4C4,9.1,6.4,9.1,8,10.6l16,15.9l16.1-15.9c1.5-1.5,3.9-1.5,5.5,0l1.3,1.4c1.5,1.5,1.5,3.9,0,5.4l0,0l-20.1,20C26,38.1,25,38.5,24,38.5L24,38.5L24,38.5z"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SideBar extends Vue {
  @Prop({ required: true }) posts!: null;

  handleClick() {
    alert("you clicked");
  }
}
</script>
<style scoped>
#mainNavTop {
  width: 28px;
  height: 28px;
  display: block;
  position: absolute;
  bottom: 68px;
  left: 30px;
  background: #fff;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 8px;
}
body {
  font-family: "Lato", sans-serif;
  position: fixed;
}

.sidebar {
  height: 100%;
  width: 90px;
  position: fixed;
  z-index: 0;
  background-color: #bf0010;
  /* overflow-x: overlay; */
  left: 0px;
  padding-top: 18px;
  -webkit-transform: translate(-4, 59px);
  transform: translate(-4, 59px);
  top: 54px;
  -webkit-transform: translate(0, 27px);
  transform: translate(0, 15px);
}

.sidebar li {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  display: block;
}

.row:hover {
  background-color: #d10000;
  transition-delay: 1ms;
  transition: background-color 0.1s ease-in-out 0s;
}

.main {
  margin-left: 160px;
  padding: 0px 10px;
}
.row {
  height: 104px;
  background-color: #e60012;
  border-radius: 0px 10px 0px 0px;
  width: 86px;
  margin-top: 0px;
}

ul {
  margin-left: -50px;
  margin-right: 15px;
  padding-left: 36px;
  margin-top: -20px;
}

li {
  margin-top: -10px;
}

p {
  text-align: center;
  font-size: 10.6px;
  line-height: 1.4;
  letter-spacing: 1.55px;
  width: 86px;
  height: 55%;
  padding: 11px;
  display: block;
  -webkit-transform: translate(-6px, -66px);
  transform: translate(-1px, -148px);
}

.icon {
  transform: translate(1px, -103px);
}
.curve {
  top: -20px;
  position: relative;
  right: -60px;
  fill: #6f0009;
}

.rowCorner {
  padding: 38px;
  margin: 0px;
  transform: translate(39px, -47px);
}
</style>