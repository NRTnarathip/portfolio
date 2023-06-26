<script>
import { ref } from 'vue';


export default {
	setup() {
		const lastCommitDate = ref('')
		return {
			lastCommitDate
		}
	},
	methods: {
		go(path) {
			this.$router.push(path)
		}
	},
	mounted() {
		const owner = 'NRTnarathip'; // Replace with the actual GitHub username or organization name
		const repo = 'portfolio'; //
		fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Unable to fetch GitHub commits.');
				}
				return response.json();
			})
			.then(data => {
				if (data.length > 0) {
					this.lastCommitDate = data[0].commit.committer.date;
				} else {
					throw new Error('No commits found in the repository.');
				}
			})
			.catch(error => {
				console.error('Error:', error.message);
			});
	},
}
</script>

<template>
	<div
		class="header flex items-center justify-between sticky top-0 z-40 w-full backdrop-blur flex-none bg-slate-900/80 shadow-sm shadow-white/20">
		<div class="absolute flex fc">
			<div class="flex fc left-0">
				<img class="w-20 rounded p-2"
					src="https://yt3.googleusercontent.com/ytc/AGIKgqPVcV4htVTqtwzcwOSbw-mKosM_KVUv6X6A4Cpqkg=s176-c-k-c0x00ffffff-no-rj">
				<a class="underline decoration-red-400	decoration-2" href="https://www.youtube.com/@NRTnarathip/videos"
					target="_blank">Youtube: NRTnarathip</a>
			</div>
		</div>
		<div class="nav">
			<div class="nav-link" @click="go('/')">Home</div>
			<div class="nav-link" @click="go('/gamedev')">Game Dev</div>
			<div class="nav-link" @click="go('/fivem')">FiveM</div>
			<div class="nav-link" @click="go('/codeproject')">Code Project</div>
		</div>
		<div class="absolute right-8">
			<!-- 😁🙌 -->
			Last Update: {{ lastCommitDate }}
		</div>
	</div>
	<div class="content">
		<router-view />
	</div>
</template>

