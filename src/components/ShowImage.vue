<template>
    <div class="flex flex-col">
        <h1 class="px-2.5 mt-4 text-3xl">ตรวจสุภาพ</h1>
        <!-- Image 01 -->
        <div class="p-6">
            <div class="flex items-center mb-4">
                <h1 class="text-2xl font-bold">แสดงรูปภาพที่ 1</h1>
            </div>
            <div class="relative overflow-hidden  rounded-md border" style="width: 400px; height: 300px;">
                <div class="absolute inset-0 opacity-90 flex items-center justify-center">
                    <!-- แสดงรูปภาพที่ได้จาก API -->
                    <img v-if="image1" :src="image1" alt="Image Preview" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
                    <!-- หากไม่ได้รับข้อมูลรูปภาพ -->
                    <span v-else>ไม่มีข้อมูลรูปภาพ</span>
                </div>
            </div>
        </div>
        <!-- Image 02 -->
        <div class="p-6">
            <div class="flex items-center mb-4">
                <h1 class="text-2xl font-bold">แสดงรูปภาพที่ 2</h1>
            </div>
            <div class="relative overflow-hidden  rounded-md border" style="width: 400px; height: 300px;">
                <div class="absolute inset-0 opacity-90 flex items-center justify-center">
                    <!-- แสดงรูปภาพที่ได้จาก API -->
                    <img v-if="image2" :src="image2" alt="Image Preview" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
                    <!-- หากไม่ได้รับข้อมูลรูปภาพ -->
                    <span v-else>ไม่มีข้อมูลรูปภาพ</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { GETIMAGE_API, baseURL } from '../APIGate';

export default {
    data() {
        return {
            formData:[],
            image1: null,
            image2: null,
        };
    },
    mounted() {
        this.showImage()
    },
    methods:{
        async showImage() {
            try{
                const res = await axios.get(`${baseURL}${GETIMAGE_API}`,{
                    headers:{
                        Authorization: 'Bearer ' + localStorage.getItem("accessToken")
                    },
                });
                this.formData = res.data;
                console.log('ข้อมูลจากAPI',this.formData);
                this.image1 = 'data:image/jpeg;base64,' + this.formData.bloodPressureMeterImage;
                this.image2 = 'data:image/jpeg;base64,' + this.formData.oxiMeterImage;
                // console.log("รูปของ bloodPressure",this.image1,"รูปของ oxiMeter",this.image2);
            }catch(e){
                console.log('ปัญหาที่พบเจอ',e);
            }
        }
    }
};

</script>
