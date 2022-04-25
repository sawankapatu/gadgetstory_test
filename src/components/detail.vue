<template>
    <div>
        <div>
            <b-img :src="require('@/images/RSQ/Banner.png')" fluid alt="Fluid image"></b-img>
        </div>

        <div>
            <b-container class="bv-example-row">
                <b-row>
                    <b-col class="colColor">
                        <b-img :src="require('@/images/RSQ/HYPHEN-2.jpeg')" id="tooltip-hyphen" v-b-tooltip.hover.bottom="'HYPHEN-2'" class="productSize"></b-img>
                    </b-col>
                    <b-col class="colColor">
                        <b-img :src="require('@/images/RSQ/inCharge 6 Max.png')" v-b-tooltip.hover.bottom="'inCharge 6 Max'" class="productSize"></b-img>
                    </b-col>
                    <b-col class="colColor">
                        <b-img :src="require('@/images/RSQ/inCharge Pro.png')" v-b-tooltip.hover.bottom="'inCharge Pro'" class="productSize"></b-img>
                    </b-col>
                </b-row>
            </b-container>

            <b-container class="bv-example-row">
                <b-row>
                    <b-col class="colColor">
                        <b-img :src="require('@/images/RSQ/inCharge-6.jpeg')" v-b-tooltip.hover.bottom="'inCharge-6'" class="productSize"></b-img>
                    </b-col>
                    <b-col class="colColor">
                        <b-img :src="require('@/images/RSQ/Magsafe.png')" v-b-tooltip.hover.bottom="'Magsafe'" class="productSize"></b-img>
                    </b-col>
                    <b-col class="colColor">
                        <b-img :src="require('@/images/RSQ/Tau.jpeg')" v-b-tooltip.hover.bottom="'Tau'" class="productSize"></b-img>
                    </b-col>
                </b-row>
            </b-container>

            <div style="padding: 50px">
                <b-button style="background-color: #aa2a31; width: 200px;">ดูทั้งหมด</b-button>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'ProDuct',
}
</script>

<style>
#imgOverlay {
    text-align: left;
}

.productSize {
    width: 300px;
}

/* .colColor {
    background-color: #aa2a31;
} */
</style>