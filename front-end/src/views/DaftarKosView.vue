<template>
    <div class="daftar-kos-header">
        <div><button class="white" @click="$router.go(-1)">Kembali</button></div>
        <div style="font-size: 32px; font-weight: bold; width: 100%;">Daftar Kos Graha Sarjana 1</div>
    </div>
    <hr style="width: 90%; color:#aaa; margin-top: 30px;">
    <div class="daftar-kos">    
        <div class="information">
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8127920.672421164!2d107.5842196623555!3d-5.896122958721235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbb1a0b359e1%3A0x4b4b37edd9aed7b!2sGRAHA%20SARJANA%20KOST%201!5e0!3m2!1sen!2sid!4v1670054891778!5m2!1sen!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="contact">
                <div class="col1">
                    <div><font-awesome-icon icon="fa-solid fa-location-dot" size="2x"/><div>Jalan Bumi Marina Emas Selatan E79</div></div>
                    <div><font-awesome-icon icon="fa-brands fa-whatsapp" size="2x"/><div><a href="https://api.whatsapp.com/send?phone=+6282235012819&text=Saya%20ingin%20memesan%20kamar%20di%20Graha%20Sarjana%20Kost">+6282235012819</a></div></div>
                    <div><font-awesome-icon icon="fa-brands fa-facebook" size="2x"/><div>GrahaSarjanaSurabaya</div></div>
                </div>
            </div>
        </div>
        <div class="rooms-container">
            <div class="room" v-for="room in rooms" :key="room.id">
                <div id="picture"><img src="../assets/kamar.jpg" alt=""></div>
                <div class="room_details">
                    <div style="font-size: 18px; font-weight:550;">Kamar {{ room.nomor }}</div>
                    <div class="fasilitas">
                        <div class="col1">
                            <div><font-awesome-icon icon="fa-solid fa-maximize" /><div>Ukuran {{ room.fasilitas[0] }}</div></div>
                            <div><font-awesome-icon icon="fa-solid fa-shower" /><div>Kamar Mandi {{ room.fasilitas[1] }}</div></div>
                            <div><font-awesome-icon icon="fa-solid fa-toilet" /><div>WC {{ room.fasilitas[2] }}</div></div>
                            <div><font-awesome-icon icon="fa-solid fa-bed" /><div>Kasur {{ room.fasilitas[3] }}</div></div>
                        </div>
                        <div class="col1">
                            <div><font-awesome-icon icon="fa-solid fa-boxes-packing" /><div>Lemari</div></div>
                            <div><font-awesome-icon icon="fa-solid fa-bolt" /><div>{{ room.fasilitas[4]}}</div></div>

                        </div>
                    </div>
                </div>
                <div class="price-container">
                    <div style=" margin: 0;position: relative;
                    top: 50%;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);">
                        <div id="price">Rp {{toPrice(room.harga)}}/bulan</div>
                        <router-link :to="`booking/${room.id}`" style="text-decoration: none;"><button class="green">BOOK</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
    export default{
        data (){
            return{
                rooms:[]
            }
        },
        methods:{
            getRooms (){
                axios.get('http://localhost:1337/getAllKamar').then(res => {
                    this.rooms = res.data
                    console.log(this.rooms)
                }).catch(err => {
                    console.log(err)
                })
            },
            toPrice(price) {
                var new_price = price.toString()
                new_price = new_price.split('')
                new_price.splice(new_price.length-3*1,0,'.')
                new_price.splice(new_price.length-1-3*2,0,'.')
                console.log(new_price)
                return new_price.join('')
            }
        },
        mounted(){
            this.getRooms()
        }
    }

</script>

<style scoped>
.daftar-kos-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.daftar-kos{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}
.information{
    width: 400px;
    padding: 0px 20px 0px 10px;
}
#map{
    border-radius: 5px;
    height: 270px;
    margin: 10px 0px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.094);
}
#contact{
    color: white;
    height: 270px;
    background-color: #008631;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.094);
}
.rooms-container{
    padding: 10px 0px;
    flex-grow: 1;
}
.room{
    display: flex;
    border-radius: 5px;
    height: 200px;
    margin: auto;
    padding: 10px 10px;
    margin-bottom: 20px;
    justify-content: stretch;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.094);
}
#picture{
    width: 250px;
}
#picture img{
    max-width: 100%;
    height: 100%;
}
.room_details{
    padding: 0px 10px;
    flex-grow: 1;
}
.room_details div{
    text-align: left;
}
.price-container{
    border-left: 2px solid rgb(0, 128, 0);
    padding-left: 10px;

}
#price{
    font-size: 24px;
    font-weight: bold;
}
.fasilitas{
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 0px 10px;
}
.fasilitas div{
    padding: 3px 0px;
}
.col1 div{
    display: flex;
    align-items: center;
}
.col1 div > div{
    margin-left: 10px;
}
#contact .col1{
    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
#contact .col1 > div{
    background-color: white;
    color: #008631;
    padding: 10px 20px;
    border-radius: 10px;
    width: 80%;
    font-size: 18px;
    margin: 0px 0px 15px 5%;
}
</style>