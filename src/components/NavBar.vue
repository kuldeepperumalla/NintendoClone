<template>
  <div>
    <div class="container">
      <nav class="navbar">
        <div bp="float-left 4--max" id="nav">
          <a>
            <img class="brand" src="brand.svg" />
          </a>
        </div>
        <div bp="float-right 4--max" class="navright">
          <a class="btn btn-default btn-submit srch-btn-toggle" type="button">
            <img src="search.svg" alt="search button" class="search" />
          </a>
          <span class="vertical-bar"></span>

          <a href="#">
            <img src="signin.svg" class="signin" />
            <span class="login-label">Sign In</span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped>
* {
  z-index: 1030;
}
.navbar {
  top: 0;
  width: 100%;
  background-color: #e60012;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 19px 19px 25px;
  margin: 0px 0px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 72px;
}
.brand {
  float: left;
  font-size: 20px;
  height: 32px;
  line-height: 22px;
  padding: 0;
}
#nav {
  width: 129px;
  margin: 0;
  padding: 0;
  justify-content: left;
}
.signin {
  width: 39px;
  height: 35px;
  margin: 0;
  padding: 0;
  grid-column: 1/4;
  margin-right: 5px;
}

header {
  grid-area: header;
}
.login-label {
  font-size: 0.65em;
  position: relative;
  margin-left: 5px;
  top: -15px;
  color: white;
}
a {
  text-decoration: none;
}
.vertical-bar {
  height: 35px;
  border-right: 1px solid #fff;
  margin: 0px 10px;
  padding: 17px 0px 0px 0px;
}

.search {
  width: 32px;
  height: 32px;
  margin: 0 2px;
}
</style>

