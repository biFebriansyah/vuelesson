<template>
    <div class="container">
        <div class="items">
            <div class="pic">
                <img :src="images" :alt="names" />
            </div>
            <div class="desc">
                <h2 class="name">{{ names }}</h2>
                <p class="detail">{{ desc }}</p>
                <h3 class="price">{{ price }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati cum libero quae aliquam, molestiae suscipit eveniet ut ratione impedit modi est quas, numquam rerum. Rerum culpa ut aperiam praesentium?"

export default {
    name: "sample",
    data() {
        return {
            names: "Nama Barang",
            desc: lorem,
            price: 20000,
            images:
                "https://hplussport.com/wp-content/uploads/2016/12/In-the-Kitchen-with-H-book-cover.png",
        }
    },
}
</script>

<style scoped>
img {
    max-width: 100%;
}
.pic {
    width: 400px;
}
.inp {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
}
.detail {
    line-height: 20px;
    font-size: 14pt;
    margin-bottom: 20px;
}
.name {
    margin-bottom: 20px;
    color: rgb(0, 153, 255);
}
.price {
    text-align: right;
    margin-right: 20px;
    color: rgb(124, 123, 123);
}
.desc {
    width: 40%;
}
.items {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
