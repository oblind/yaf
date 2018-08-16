<template>
  <div style="background-color: yellow">
    Page1
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(to.name)
    })
  }
}
</script>
