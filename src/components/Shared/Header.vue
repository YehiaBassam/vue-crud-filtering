<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <img src="@/assets/images/logo.png" alt="khabeer" style="width: 40px" />
      <h4 class="project-name">Vue CRUD</h4>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #3b4260;
}
.project-name {
  background-color: #ca4246;
  background-image: linear-gradient(
    45deg,
    #ca4246 16.666%,
    #e16541 16.666%,
    #e16541 33.333%,
    #f18f43 33.333%,
    #f18f43 50%,
    #8b9862 50%,
    #8b9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #a7489b 83.333%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-simple-animation-rev 0.75s ease forwards;

}
.project-name:hover{
  animation: rainbow-text-simple-animation 0.5s ease-in forwards;
}

@keyframes rainbow-text-simple-animation-rev {
  0% {
    background-size: 650%;
  }
  40% {
    background-size: 650%;
  }
  100% {
    background-size: 100%;
  }
}

@keyframes rainbow-text-simple-animation {
  0% {
    background-size: 100%;
  }
  80% {
    background-size: 650%;
  }
  100% {
    background-size: 650%;
  }
}
</style>
