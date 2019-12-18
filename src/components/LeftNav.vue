<template>
  <div class="main">
    <div class="sidebar">
      <div bp="grid 6@lg">
        <div class="columnWrap" bp="1--max full-width-until@sm">
          <ul>
            <li :key="id" v-for="(sideNav, id) in sideNav">
              <div class="row subMenuContainer" v-on:click="handleClick">
                <span class="mainN">
                  <!-- <div class="rowCorner">
                    <img src="rowCurve.svg" alt />
                  </div>-->
                  <div class="icon">
                    <img v-bind:src="sideNav.iconsvg" />
                  </div>
                </span>
                <p>{{sideNav.title}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class LeftNav extends Vue {
  @Prop({ required: true }) sideNav!: object;
  handleClick() {
    alert(JSON.stringify(this.sideNav));
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
  left: 0px;
  padding-top: 16px;
  -webkit-transform: translate(-4, 59px);
  transform: translate(-4, 59px);
  top: 54px;
  -webkit-transform: translate(0, 27px);
  transform: translate(0, 18px);
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
  margin-right: 0px;
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
  margin: 0px;
  display: block;
  -webkit-transform: translate(-6px, -66px);
  transform: translate(-1px, -20px);
}

.icon {
  transform: translate(1px, 10px);
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

.columnWrap {
  max-width: 89.33333px !important;
}
</style>