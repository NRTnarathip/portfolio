<script>
import { reactive } from 'vue';

export default {
	setup() {
		const videos = reactive([

		])
		return {}
	}
}
</script>

<template>
	<div class="text-center text-2xl mt-14">
		ผลงานในด้านโปรเจคอื่นๆ
	</div>
	<div class="text-center mt-4">
		จำพวกโปรเจคเล็กๆ
	</div>
	<div class="flex fc flex-col">
		<img class="w-[120px] rounded-xl" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
			alt="" srcset="">
		<div class="grid grid-cols-2 gap-4">
			<div class="my-4">
				<span class="text-xl">
					Ray Tracing Render
				</span>
				<img class="w-96 rounded"
					src="https://raw.githubusercontent.com/NRTnarathip/Ray-Tracing-Render/master/result.jpg" alt=""
					srcset="">
				<a class="hover:text-pink-400"  href="https://github.com/NRTnarathip/Ray-Tracing-Render" target="_blank" rel="noopener noreferrer">
					Link Project Github Here.
				</a>
			</div>
			<div class="my-4">
				<span class="text-xl">Raymarching ASCII Render Engine</span>
				<iframe
					src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FnarathipthNRT%2Fvideos%2F774542260338017%2F%3Fidorvanity%3D240703846140892&show_text=false&width=560&t=0"
					width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
					allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					allowFullScreen="true"></iframe>
				<a class="hover:text-pink-400" href="https://github.com/NRTnarathip/Donut3D-Console-Windows" target="_blank" rel="noopener noreferrer">
					Link Project Here.
				</a>
			</div>
			<div>
				<div>
					ศึกษา OpenCV, Detect Object และบังคับ Keyboard ตัวละคร
				</div>
				<iframe
					src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FnarathipthNRT%2Fvideos%2F977235862742136%2F&show_text=false&width=560&t=0"
					width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
					allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					allowFullScreen="true"></iframe>
		</div>
	</div>
</div></template>