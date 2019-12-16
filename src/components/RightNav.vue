<template>
  <div class="sidebar">
    <div class="rowItems">
      <ul>
        <li :key="id" v-for="(post, id) in posts">
          <div bp="float-right" class="rowCorner">
            <img src="rowCurve.svg" alt />
          </div>
          <div class="row subMenuContainer" v-on:click="handleClick">
            <div class="icon">
              <img class="svgIcons" v-bind:src="post.iconsvg" />
              <p>{{post.title}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <a id="mainNavTop" href="#" title="top">
      <img src="top.svg" alt />
    </a>
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
* {
  margin: 0;
}
#mainNavTop {
  width: 28px;
  height: 28px;
  display: block;
  bottom: 68px;
  left: 30px;
  background: #fff;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 8px;
}

img.svgIcons {
  width: 62%;
  overflow: hidden;
  margin-bottom: -5px;
  margin-top: -5px;
}

.sidebar {
  overflow: none;
  height: 100%;
  width: 90px;
  background-color: #bf0010;
  padding: 0.5px 0px 0px 0px;
}

.sidebar li {
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  display: block;
  margin: 1px 0px 0px 0px;
}

ul {
  padding: 0px;
}

.row:hover {
  background-color: #d10000;
  transition-delay: 1ms;
  transition: background-color 0.1s ease-in-out 0s;
}

.row {
  height: 100%;
  background-color: #e60012;
  border-radius: 0px 10px 0px 0px;
  width: 86px;
  margin-top: 0px;
}

p {
  text-align: center;
  font-size: 10.6px;
  line-height: 1.4;
  letter-spacing: 1.55px;
  width: 86px;
  height: 55%;

  display: block;
}

.icon {
  width: 100%;
  height: 86px;
}
.curve {
  top: -20px;
  position: relative;
  right: -60px;
  fill: #6f0009;
}
.rowCorner {
  width: 20%;
  padding: 0px;
}
</style>