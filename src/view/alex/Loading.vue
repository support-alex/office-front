<template>
  <div id="loading">
    <img

      
      class="img"
      src="/media/bg/infin.gif"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style>
#loading {
  position: fixed;
  z-index: 1000;
  background-color: white;

  height: 100%;
  width: 100%;
  text-align: center;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
</style>


