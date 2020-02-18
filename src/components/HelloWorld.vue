<template>
  <div class="hello">
    <div class="container">
      <div class="row">
      <span :key=i v-for="i in imageCnt">
        <div class="col-sm-6 col-md-4">
          <router-link :to="{path: 'ProductDetail/'+i}">
            <div class="thumbnail">
              <img v-bind:src='"../assets/Image/DHL-Free-"+i+".png"' >
              <div class="caption">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="star-rating">
                      <span class="fa fa-star-o" data-rating="1"></span>
                      <span class="fa fa-star-o" data-rating="2"></span>
                      <span class="fa fa-star-o" data-rating="3"></span>
                      <span class="fa fa-star-o" data-rating="4"></span>
                      <span class="fa fa-star-o" data-rating="5"></span>
                      <input type="hidden" name="whatever1" class="rating-value" value="2.56">
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </router-link>
        </div>
      </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      imageCnt: 10,
      imageLink: '../assets/Image/DHL-Free-'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
