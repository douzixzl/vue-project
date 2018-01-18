<template>
	<div>
		<h1>{{text}}</h1>
		<p>{{get_msg}}</p>
		<p></p>
		<button @click='getmsg'>get请求点我</button>
		<button @click="postmsg">post请求点我</button>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				text:'我来自7班',
			}
		},
		methods:{
			getmsg(){
				this.$store.dispatch('getmsg_get',{path:'product/',msg:{houseOwner:'Kemo'}});
			},
			postmsg(){
				this.$store.dispatch('getmsg_post',{path:'product',msg:{houseOwner:'Kemo'}});
			}
		},
		computed:{
			get_msg:{
				get:function(){
					console.log(11555);
					return this.$store.getters.getmsg_get;
				}
			}
		}
	}
</script>