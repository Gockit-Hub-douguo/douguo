import Vue from 'vue'
import Vuex from 'vuex'
import { getgoodslist } from 'ax/goodsdeal.js'
import { getworkslist } from 'ax/jingxuan.js'
import { getgoodscomtianer } from 'ax/getgoodscomtianer.js'
import { getseesionu } from 'ax/regiest.js'
import active from './active'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ulist: [],
    phone: '',
    a: 1,
    id: '',
    data: {},
    goodslist: [],
    worksList: [],
    getgoodscomtianer: [],
    spxiang: [
      {
        img1: 'https://cp1.douguo.com/upload/caiku/0/e/1/690x390_0edcbc89b7ba86213a1d3ccf066d8f91.jpeg',
        img2: 'https://tx1.douguo.com/upload/photo/0/5/3/70_u23031311864462001633.jpeg',
        img3: 'https://cp1.douguo.com/upload/caiku/d/2/8/200_d2225d5c280f635e2418b0101341a7e8.jpeg',
        img4: 'https://cp1.douguo.com/upload/caiku/1/f/4/200_1f62155fde8a09126a7d7ce93c2675f4.jpeg',
        img5: 'https://cp1.douguo.com/upload/caiku/b/2/e/200_b24368f7aac8aa277296a0a57690e63e.jpeg',
        img6: 'https://cp1.douguo.com/upload/caiku/1/7/f/200_17d665b44babceb0d56f26fab1b7f16f.jpeg',
        img7: 'https://cp1.douguo.com/upload/caiku/a/d/8/200_ad89865cd87bb296b4a453c5a1a6baf8.jpeg',
        img8: 'https://cp1.douguo.com/upload/caiku/c/c/c/200_ccb0e8b39f676160c16e5ea53314a46c.jpeg',
        img9: 'https://cp1.douguo.com/upload/caiku/3/6/8/200_365f9b914d673b2d1f3a1f1dfa7ca268.jpeg',
        img10: 'https://cp1.douguo.com/upload/caiku/6/e/3/200_6eaf8ce382cb4d82fbb94a7dd8077853.jpeg',
        img11: 'https://f12.baidu.com/it/u=571818017,1429288066&fm=76',
        img12: 'https://tx1.douguo.com/upload/photo/4/9/4/70_4907e51a2d5676bcd89d7b738cedcbb4.jpg'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/d/2/2/690x390_d25b85e2f57b4f7fb53ce4426b1b1e42.jpg',
        img2: 'https://tx1.douguo.com/upload/photo/e/d/0/70_u81722772144300144804.jpg',
        img3: 'https://cp1.douguo.com/upload/caiku/2/1/2/200_2111b8188d50748020c42927b6ab0882.jpg',
        img4: 'https://cp1.douguo.com/upload/caiku/d/0/e/200_d04fa63ba6313f6b307339b1aa1cb4ee.jpg',
        img5: 'https://cp1.douguo.com/upload/caiku/2/e/5/200_2ef419e010307e7bfa27eb64e6be1655.jpg',
        img6: 'https://cp1.douguo.com/upload/caiku/2/f/e/200_2f9e1efca9d5860f8b128ae412a5c0de.jpg',
        img7: 'https://cp1.douguo.com/upload/caiku/9/4/5/200_9499b6c19f6df19241c27c7f316c5ef5.jpg',
        img8: 'https://cp1.douguo.com/upload/caiku/4/4/1/200_44c123952e273ae1b51c8e850ee6b191.jpg',
        img9: 'https://cp1.douguo.com/upload/caiku/a/9/7/200_a94b5dfce011780fd31d8495970200d7.jpg',
        img10: 'https://cp1.douguo.com/upload/caiku/a/9/7/200_a94b5dfce011780fd31d8495970200d7.jpg',
        img11: 'https://t10.baidu.com/it/u=386458071,4032904442&fm=76',
        img12: 'https://cp1.douguo.com/upload/post/0/5/e/05aeea3b60fc913bdd1aca91e8df045e.jpg'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/7/e/6/690x390_7e0e01c55d20865d81c57af61f7ae476.jpg',
        img2: 'https://tx1.douguo.com/upload/photo/2/a/c/70_2a27a882ad48c1a504b18295a975da3c.jpg',
        img3: 'https://cp1.douguo.com/upload/caiku/9/a/c/200_9a9815026a0cdc7b92e4940158cf042c.jpg',
        img4: 'https://cp1.douguo.com/upload/caiku/e/3/3/200_e3c6a0f994032025f11f1d20644a9523.jpg',
        img5: 'https://cp1.douguo.com/upload/caiku/e/8/2/200_e83111f1cbe60d4503061150c320b1c2.jpg',
        img6: 'https://cp1.douguo.com/upload/caiku/2/2/6/200_22122234d6bac636221c3c47398228d6.jpg',
        img7: 'https://cp1.douguo.com/upload/caiku/c/6/e/200_c677b888b5a3eab3c428c3ac0b8b464e.jpg',
        img8: 'https://cp1.douguo.com/upload/caiku/1/7/c/200_179686755286648c1b3940317781b54c.jpg',
        img9: 'https://cp1.douguo.com/upload/caiku/d/e/1/200_dea4e3d39eb7abf35cb81d96d7d2d0c1.jpg',
        img10: 'https://f12.baidu.com/it/u=189115805,612119307&fm=76',
        img11: 'https://t11.baidu.com/it/u=3929638924,2339819253&fm=76',
        img12: 'https://t12.baidu.com/it/u=3451496012,3669517941&fm=76'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/d/c/7/690x390_dc4308a6cdd974b817058a407dfce307.jpeg',
        img2: 'https://tx1.douguo.com/upload/photo/9/5/e/70_95483dcb76a93042ec1db96b3cdd8ade.jpg',
        img3: 'https://cp1.douguo.com/upload/caiku/3/9/c/200_39b6333c4518b7fa67f0b087f59d96fc.jpeg',
        img4: 'https://cp1.douguo.com/upload/caiku/c/c/c/200_cc72c159557f06a872db55ec3b20090c.jpeg',
        img5: 'https://cp1.douguo.com/upload/caiku/4/b/4/200_4becfec390d802ddc06d099517179ec4.jpeg',
        img6: 'https://cp1.douguo.com/upload/caiku/9/0/0/200_90aa49e04b1fbca520827a092159ce20.jpeg',
        img7: 'https://cp1.douguo.com/upload/caiku/e/e/d/200_eeb6a41639d746028ab3e48d47ab855d.jpeg',
        img8: 'https://cp1.douguo.com/upload/caiku/d/6/d/200_d6b1df4d1108e28d02c2169f49fd572d.jpeg',
        img9: 'https://cp1.douguo.com/upload/caiku/e/2/8/200_e28aced6321095d23f74f05828fca618.jpeg',
        img10: 'https://cp1.douguo.com/upload/caiku/b/9/a/200_b97c662a1777d2d7f5ff373563c7ff0a.jpeg',
        img11: 'https://cp1.douguo.com/upload/caiku/0/6/e/200_0610c8eefb5f7f6f3060a3ba22c2935e.jpeg',
        img12: 'https://cp1.douguo.com/upload/caiku/8/7/3/200_8742c7e4c06ab5bc11b63e33e7efecf3.jpeg'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/1/0/5/690x390_10100536274fedad7a83004932d4f115.jpg',
        img2: 'https://tx1.douguo.com/upload/photo/8/6/7/70_u51501721908258002124.jpg',
        img3: 'https://cp1.douguo.com/upload/caiku/3/b/a/200_3bb2d1e6219dcd672f423752776694fa.jpg',
        img4: 'https://cp1.douguo.com/upload/caiku/1/f/d/200_1febca50a1314fb4b2c3e6bf6fed2d9d.jpg',
        img5: 'https://cp1.douguo.com/upload/caiku/1/f/d/200_1febca50a1314fb4b2c3e6bf6fed2d9d.jpg',
        img6: 'https://cp1.douguo.com/upload/caiku/a/f/2/200_af5bfcbb5db02926e61de3a6ea5a0522.jpg',
        img7: 'https://cp1.douguo.com/upload/caiku/6/d/9/200_6d422d7d2c834a9e2757c8da8224a6f9.jpg',
        img8: 'https://cp1.douguo.com/upload/caiku/6/d/5/200_6dda2c244133f54015622143af71a1f5.jpg',
        img9: 'https://cp1.douguo.com/upload/caiku/7/1/1/200_713683baa4c256cf7bccc5dac57c8a91.jpg',
        img10: 'https://cp1.douguo.com/upload/caiku/4/d/d/200_4d0c39dde07a59a63de6a7db1dbbc7cd.jpg',
        img11: 'https://cp1.douguo.com/upload/caiku/8/7/4/200_87228987f1c136c0c03476ec9e57c924.jpg',
        img12: 'https://f10.baidu.com/it/u=86840811,2017178932&fm=76'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/7/a/a/690x390_7a76721de1a4b1675646fd1a534c320a.jpg',
        img2: 'https://tx1.douguo.com/upload/photo/a/b/7/70_u29376457064900.jpg',
        img3: 'https://cp1.douguo.com/upload/caiku/f/8/6/200_f8d300f6348aa64384b0863cea8d2b76.jpg',
        img4: 'https://cp1.douguo.com/upload/caiku/3/6/c/200_3698d3b3f42687beb9386fa5eb86041c.jpg',
        img5: 'https://cp1.douguo.com/upload/caiku/3/6/c/200_3698d3b3f42687beb9386fa5eb86041c.jpg',
        img6: 'https://cp1.douguo.com/upload/caiku/7/8/d/200_7867fe519a110bfae56df0479fe29e0d.jpg',
        img7: 'https://cp1.douguo.com/upload/caiku/8/f/6/200_8f6855f96ebcda271833547954338e66.jpg',
        img8: 'https://cp1.douguo.com/upload/caiku/0/4/2/200_0430c49a269cc903b9993d94f8503d92.jpg',
        img9: 'https://cp1.douguo.com/upload/caiku/0/2/c/200_02d0605f46b39ce4dd482347bf55a15c.jpg',
        img10: 'https://f12.baidu.com/it/u=257832686,3811667731&fm=76',
        img11: 'https://f12.baidu.com/it/u=8924159,1747348028&fm=76',
        img12: 'https://f10.baidu.com/it/u=1195304814,1768013753&fm=76'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/e/e/f/690x390_ee1d25fb3a205577b260bb1cdd3f4a8f.jpeg',
        img2: 'https://tx1.douguo.com/upload/photo/6/a/9/70_u7976789544409142856.jpeg',
        img3: 'https://cp1.douguo.com/upload/caiku/0/4/9/200_04ee43024de4dda9d8eb930420d33a79.jpeg',
        img4: 'https://cp1.douguo.com/upload/caiku/2/b/7/200_2b45d8194e513f2763920015af3c3427.jpeg',
        img5: 'https://cp1.douguo.com/upload/caiku/f/2/d/200_f25e3c7e3b57358cdf58a132d04e83fd.jpeg',
        img6: 'https://cp1.douguo.com/upload/caiku/f/3/c/200_f31cb47a9bf9f37548444a6055a6f1dc.jpeg',
        img7: 'https://cp1.douguo.com/upload/caiku/a/f/f/200_af63ea0203ea857ba96bc236d95c2ecf.jpeg',
        img8: 'https://cp1.douguo.com/upload/caiku/2/0/1/200_2084d50bbf9c2a5852019e2c085462e1.jpeg',
        img9: 'https://cp1.douguo.com/upload/caiku/2/0/1/200_2084d50bbf9c2a5852019e2c085462e1.jpeg',
        img10: 'https://cp1.douguo.com/upload/caiku/3/7/2/200_37e597527018564ea3725cccdc944ac2.jpeg',
        img11: 'https://f12.baidu.com/it/u=167891009,2222178836&fm=76',
        img12: 'https://f12.baidu.com/it/u=189115805,612119307&fm=76'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/0/e/1/690x390_0edcbc89b7ba86213a1d3ccf066d8f91.jpeg',
        img2: 'https://tx1.douguo.com/upload/photo/0/5/3/70_u23031311864462001633.jpeg',
        img3: 'https://cp1.douguo.com/upload/caiku/d/2/8/200_d2225d5c280f635e2418b0101341a7e8.jpeg',
        img4: 'https://cp1.douguo.com/upload/caiku/1/f/4/200_1f62155fde8a09126a7d7ce93c2675f4.jpeg',
        img5: 'https://cp1.douguo.com/upload/caiku/b/2/e/200_b24368f7aac8aa277296a0a57690e63e.jpeg',
        img6: 'https://cp1.douguo.com/upload/caiku/1/7/f/200_17d665b44babceb0d56f26fab1b7f16f.jpeg',
        img7: 'https://cp1.douguo.com/upload/caiku/a/d/8/200_ad89865cd87bb296b4a453c5a1a6baf8.jpeg',
        img8: 'https://cp1.douguo.com/upload/caiku/c/c/c/200_ccb0e8b39f676160c16e5ea53314a46c.jpeg',
        img9: 'https://cp1.douguo.com/upload/caiku/3/6/8/200_365f9b914d673b2d1f3a1f1dfa7ca268.jpeg',
        img10: 'https://cp1.douguo.com/upload/caiku/6/e/3/200_6eaf8ce382cb4d82fbb94a7dd8077853.jpeg',
        img11: 'https://f12.baidu.com/it/u=571818017,1429288066&fm=76',
        img12: 'https://tx1.douguo.com/upload/photo/4/9/4/70_4907e51a2d5676bcd89d7b738cedcbb4.jpg'
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/0/e/1/690x390_0edcbc89b7ba86213a1d3ccf066d8f91.jpeg',
        img2: 'https://tx1.douguo.com/upload/photo/0/5/3/70_u23031311864462001633.jpeg',
        img3: 'https://cp1.douguo.com/upload/caiku/d/2/8/200_d2225d5c280f635e2418b0101341a7e8.jpeg',
        img4: 'https://cp1.douguo.com/upload/caiku/1/f/4/200_1f62155fde8a09126a7d7ce93c2675f4.jpeg',
        img5: 'https://cp1.douguo.com/upload/caiku/b/2/e/200_b24368f7aac8aa277296a0a57690e63e.jpeg',
        img6: 'https://cp1.douguo.com/upload/caiku/1/7/f/200_17d665b44babceb0d56f26fab1b7f16f.jpeg',
        img7: 'https://cp1.douguo.com/upload/caiku/a/d/8/200_ad89865cd87bb296b4a453c5a1a6baf8.jpeg',
        img8: 'https://cp1.douguo.com/upload/caiku/c/c/c/200_ccb0e8b39f676160c16e5ea53314a46c.jpeg',
        img9: 'https://cp1.douguo.com/upload/caiku/3/6/8/200_365f9b914d673b2d1f3a1f1dfa7ca268.jpeg',
        img10: 'https://cp1.douguo.com/upload/caiku/6/e/3/200_6eaf8ce382cb4d82fbb94a7dd8077853.jpeg',
        img11: 'https://f12.baidu.com/it/u=571818017,1429288066&fm=76',
        img12: 'https://tx1.douguo.com/upload/photo/4/9/4/70_4907e51a2d5676bcd89d7b738cedcbb4.jpg'
      }
    ]
  },
  mutations: {
    changephone(state,dat){
      state.phone = dat
    },
    changeulist(state,id){
      state.ulist = id
    },
    changeindex(state,id){
      state.id = id
      console.log(state.id)
    },
    // 商品详情的数据
    sp(xiangqing, list){
      xiangqing.getgoodscomtianer = list
    },
    // 登录跳转传值
    clik (h, b) {
      // var a= this.state.a
      this.state.a = b
      console.log(this.state.a)
    },
    // 对豆果商城数据获取
    changdggoods(state, list){
      state.goodslist = list
    },
    // 对星巴克菜单数据存储 data(数据本身，接收的参数)
    data (data,obj) {
      this.state.data = obj
      console.log(this.state.data)
    },
    // 获取豆果的作品
    changeWorksList(state,list){
      state.worksList = list
    }
  },
  actions: {
    getsession({ commit }){
      getseesionu().then((res)=>{
        console.log(res[0].phonenumber)
        commit('changephone',res[0].phonenumber)
        commit('changeulist',res[0])
      })
    },
    sgetgoodscomtianer(context){
      var id = context.state.id
      console.log(id)
      getgoodscomtianer(id).then((data)=>{
        context.commit('sp',data)
      }).catch((err)=>{
        console.log(err)
      })
    },
    getdggoods({ commit }){
      getgoodslist().then((data)=>{
        commit('changdggoods',data)
      }).catch((err)=>{
        console.log(err)
      })
    },
    getworkslist(context){
      getworkslist().then((list)=>{
        context.commit('changeWorksList',list)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  modules: {
    active: active
  }
})
