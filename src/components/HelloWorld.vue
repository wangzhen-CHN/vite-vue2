<template>
  <div class="box">
    <h1>HelloWorld</h1>
    <h2>Vue2</h2>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {
    const a = 1
  }
}
</script>
<style lang="scss" scoped>
.box {
  h1 {
    margin-top: 20%;
    color: #4fc08d;
    line-height: 20px;
    text-align: center;
  }

  h2 {
    font-size: 16px;
    text-align: center;
  }
}
</style>
