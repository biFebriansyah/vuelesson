<template>
    <div class="container">
        <div class="charts" v-if="chart.length > 0">
            <h2>Chart = {{ chart.length }}</h2>
        </div>
        <div class="inp">
            <input type="text" v-model="max" />
            <input type="range" min="0" max="130" v-model="max" />
        </div>
        <div class="content" v-for="items in datas" :key="items.id">
            <div class="if" v-if="max >= Number(items.price)">
                <Items
                    :names="items.name"
                    :desc="items.description"
                    :price="items.price"
                    :images="items.image"
                />
                <div class="btn">
                    <button @click="addChart(items)">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Items from "@/components/Items"

const data = [
    {
        id: "532",
        name: "Slicker Jacket",
        description:
            "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
        price: "125",
        image_title: "slicker-jacket_lynda_29941",
        image: "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg",
    },
    {
        id: "530",
        name: "Bamboo Thermal Ski Coat",
        description:
            "You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
        price: "99",
        image_title: "ski-coat_lynda_29940",
        image: "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg",
    },
    {
        id: "516",
        name: "Unisex Thermal Vest",
        description:
            "Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.",
        price: "95",
        image_title: "unisex-thermal-vest_lynda_29944",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg",
    },
    {
        id: "514",
        name: "Grunge Skater Jeans",
        description:
            "Our boy-cut jeans are for men and women who appreciate that skate park fashions aren't just for skaters. Made from the softest and most flexible organic cotton denim.",
        price: "68",
        image_title: "unisex-grunge-jeans_lynda_29937",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/unisex-grunge-jeans_LYNDA_29937.jpg",
    },
    {
        id: "520",
        name: "V-Neck Sweater",
        description:
            "This medium-weight sweater, made from organic knitted cotton and bamboo, is the perfect solution to a chilly night at the campground or a misty walk on the beach.",
        price: "65",
        image_title: "v-neck-sweater-for-men_lynda_29947",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/v-neck-sweater-for-men_LYNDA_29947.jpg",
    },
    {
        id: "518",
        name: "V-Neck Pullover",
        description:
            "This organic hemp jersey pullover is perfect in a pinch. Wear for casual days at the office, a game of hoops after work, or running your weekend errands.",
        price: "65",
        image_title: "v-neck-long-sleeved-pullover_lynda_29946",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/v-neck-long-sleeved-pullover_LYNDA_29946.jpg",
    },
]
export default {
    name: "product",
    components: {
        Items,
    },
    data() {
        return {
            datas: data,
            max: 90,
            chart: [],
        }
    },
    methods: {
        addChart(data) {
            this.chart.push(data)
            console.log(this.chart)
        },
    },
}
</script>

<style scoped>
.if {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    padding: 8px;
    font-size: 13pt;
}
.inp {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
}

button {
    width: 80px;
    height: 30px;
    background: crimson;
    border: none;
    border-radius: 4px;
    color: white;
    margin-right: 20px;
    outline: none;
    cursor: pointer;
}

button:hover {
    background: rgb(134, 16, 40);
}
</style>
