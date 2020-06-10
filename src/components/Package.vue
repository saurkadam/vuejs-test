<template>
    <div>
        <h2 class="head">Dein Testpaket enthält</h2>
        <div class="package-view">
            <AlignerComponent  direction="row" class="alignComponent" alignedItems="center" :marginProvided="'20px 50px'" justify="center"  v-for="(data,index) in data" :key="index">
                <ImageComponent class="padLeft" slot="left" :imgSrc="data.imgName" :rounded="false" imgWidth="auto" imgHeight="auto"></ImageComponent>
                <div slot="right" class="side-sect">
                    <h4 class="header">{{data.name}}</h4>
                    <div class="star-block">     
                        <star-rating 
                            v-bind:increment="0.5"
                            v-bind:rating="data.rating"
                            v-bind:max-rating="5"
                            inactive-color="#000"
                            active-color="#f2c94c"
                            v-bind:star-size="20"
                            :show-rating="false"
                            :read-only="true"></star-rating>
                            <span>({{data.bracketNum}})</span>           
                    </div>

                    <ul class="listElements">
                        <li class="listData" v-for="(listData,indexValue) in data.listData" :key="indexValue">{{listData}}</li>
                    </ul>
                </div>
            </AlignerComponent>
        </div>

    </div>
</template>

<script>
import AlignerComponent from './shared/AlignerComponent'
import ImageComponent from './shared/ImageComponent'
import StarRating from 'vue-star-rating'
export default {
    name: 'Package',
    components: {
        AlignerComponent,
        ImageComponent,
        StarRating
    },
    props: {
        data:{
            type: Array
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/app.scss';
.package-view {
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.side-sect {
    display:flex;
    flex-direction: column;
}
.side-sect {
    align-items:flex-start;
}
.star {
    div {
        div {
            span{
                display: none !important;
            }
        }

    }
}
.padLeft {
    padding-right: 1em;
}
.header {
    margin:0;
    @include fontChanges();
}
.star-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:1em;
}
.listElements {
    text-align: left;
    .listData {
        font-size: $font-size-small;
        @include fontChanges();
    }
}
.head {
    @include fontChanges(); 
}
@include breakpoint(smallDevice) {
    .package-view {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .padLeft {
        padding: 0em;
    }
    .alignComponents{ 
        margin: 0 !important;
    }

}
</style>