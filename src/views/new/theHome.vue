<script setup>

</script>

<template>
  <div class="flex-col self-start group_3">
    <div class="group_2">
      <div class="group_5">
        <span class="self-start text_6">Hello World</span>
      </div>
      <div class="flex-col self-start group_4">
        <div class="group_6">
          <span class="text_8">Third-party question set, reference only.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.self-start {
  align-self: flex-start;
}

.group_3 {
  margin-right: 5px;
  width: 99%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group_5 {
  display: flex;
  justify-content: left;
}

.group_6 {
  display: flex;
  justify-content: left;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.text_6 {
  color: #6c5dd3;
  font-size: 72px;
  font-family: HarmonyOSSansSC;
  font-weight: 900;
  line-height: 55px;
  letter-spacing: 8px;
}

.group_4 {
  margin-top: 64px;
  width: 931px;
}

.text_8 {
  color: #5f89d3;
  font-size: 40px;
  font-family: HarmonyOSSansSC;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 1px;
}

.text_11 {
  margin-top: 37px;
  color: #828282;
  font-size: 36px;
  font-family: HarmonyOSSansSC;
  font-weight: 700;
  line-height: 43px;
  text-align: left;
  letter-spacing: 1px;
}

.group_5 {
  opacity: 0;
  animation: fadeInUp 0.5s ease-in-out forwards;
  animation-delay: 0.5s;
}

.group_6 {
  opacity: 0;
  animation: fadeInUp 0.5s ease-in-out forwards;
  animation-delay: 1s;
}

.group_7 {
  opacity: 0;
  animation: fadeInUp 0.5s ease-in-out forwards;
  animation-delay: 1.5s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>