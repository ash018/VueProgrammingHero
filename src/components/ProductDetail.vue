<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                <div class="thumbnail">
                    <img v-bind:src='"../assets/Image/DHL-Free-"+imageIndex+".png"' >
                    <div class="caption">
                          
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                <div class="thumbnail">
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
                        <div class="row">
                            <div class="col-sm-8 col-md-8 col-lg-8 col-xs-8"></div>
                            <div class="col-sm-4 col-md-4 col-lg-4 col-xs-4" style="background-color:orange; border-radius:25px; width:100px;">
                                Price: 500$
                            </div>
                        </div>
                        
                    </div>
                    <ul class="list-inline">
                        <li><img src="../assets/Image/cash_on_delivery.png" /></li>
                        <li><img src="../assets/Image/master_card.png" /></li>
                        <li><img src="../assets/Image/maestro.png" /></li>
                        <li><img src="../assets/Image/credit-cards_visa.png" /></li>
                        <li><img src="../assets/Image/Bitmap.png" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
       imageIndex: ''
    }
  },

  mounted () {
      this.imageIndex = this.$route.params.id
  }
}
</script>