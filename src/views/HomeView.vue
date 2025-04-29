<script>
export default {
	setup() {
		return {};
	},
};
</script>

<template>
	<div
		class="flex flex-col justify-center items-center mt-10 mb-20 text-slate-50"
	>
		<div
			class="text-base flex flex-col gap-4 text-center bg-slate-700/50 rounded-xl p-4"
		>
			<span class="text-2xl rounded-xl p-4">
				Hi!. My name is
				<span class="text-blue-400"> Narathip Khenthauaon </span>
			</span>
			<div>
				สวัสดีทุกคนครับ 😁🙌
				<div>ผม นราธิป เคนถาวร ชื่อเล่น กาย อายุ 21 ครับ 👻</div>
				<br />
				ผมเป็น นักพัฒนาเกมอิสระ | Indie Dev 🥕
				<br />
				นี่คือประวัติผลงานต่างๆ
				<br />
				โดย Engine ที่ฝึกใช้นั้นก็จะใช้ Unity3D Engine มาตั้งแต่ปี 2019
				<br />
				และฝึกฝนสกิลด้านอื่นๆเช่น AI, Voxel Engine, Code Procedural
				<div>
					<div>
						ปัจจุบันทำ Stardew Valley Modder สำหรับมือถือ
						โดยมีผู้ใช้งานกว่า 5 หมื่นคน
					</div>
					<div class="flex items-center justify-center gap-4">
						<img src="/img/smapi.png"  class="h-20"/>
						<a
							href="https://discord.com/invite/ETtycvcJjr"
							target="_blank"
							rel="noopener noreferrer"
							class="discordLink"
						>
							เข้าร่วม Discord คลิ๊กที่นี่
						</a>
					</div>
					<div class="flex items-center justify-center gap-4">
						<img src="/img/github.png" class="h-20" />
						<a
							href="https://github.com/NRTnarathip"
							target="_blank"
							rel="noopener noreferrer"
							class="discordLink"
						>
							Github Repository คลิ๊กที่นี่
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-8 text-center flex flex-col gap-8">
			<div class="msg rounded-xl">
				<div class="mt-4 text-xl">
					ทักษะ Programmer
					<br />
					OOP, Optimizer, Clean Code, Design Pattern
					<br />
					ทดลองเทคนิคใหม่ๆ และ ศึกษา Frameworks เรียนรู้สิ่งใหม่ๆเสมอ
				</div>
			</div>
			<div class="text-xl flex flex-col fc msg">
				<div class="text-2xl">ทักษะด้านอื่นๆเกี่ยวกับ Game Dev</div>
				<div class="mt-4">
					Modeling, Animation ด้วย software Blender ระดับพื้นฐาน
				</div>
				<img
					class="w-[120px]"
					src="https://download.blender.org/branding/community/blender_community_badge_white.png"
					alt=""
					srcset=""
				/>
				<br />
				Pixel Art ด้วย software Aseprite ระดับพื้นฐาน
				<img
					class="w-[120px]"
					src="https://community.aseprite.org/uploads/default/original/2X/f/fc918daaaabaf72920a240177aa1b521ace8488d.png"
					alt=""
					srcset=""
				/>
			</div>
			<div class="rounded-xl msg">
				<div class="text-2xl">
					ทักษะ Coding ระดับสูง และใช้ในชีวิตประจำวัน Dev Game
				</div>
				<div class="flex fc mt-8 gap-8">
					<div class="flex flex-col fc items-center">
						<img
							class="h-20 bg-slate-800 rounded-full p-4"
							src="/img/unity.png"
						/>
						<span class="text-xl"> 4 Year </span>
					</div>
					<div class="flex flex-col fc items-center">
						<img
							class="h-20 bg-slate-600 rounded-full p-4"
							src="/img/csharp.png"
						/>
						<span class="text-xl"> 4 Year </span>
					</div>
					<div class="flex flex-col fc items-center">
						<img
							class="h-20 bg-slate-600 rounded-full p-4"
							src="/img/cplusplus.png"
						/>
						<span class="text-xl"> 3 Year </span>
					</div>
					<div class="flex flex-col fc items-center">
						<img
							class="h-20 bg-slate-600 rounded-full p-4"
							src="/img/lua.svg"
						/>
						<span class="text-xl"> 2 Year </span>
					</div>
				</div>
			</div>
		</div>
		<div class="text-xl mt-14">ภาษาอื่นๆนอกการเขียนเกม</div>
		<div class="mt-8 flex fc gap-8">
			<div class="flex fc flex-col">
				<img
					class="h-20 bg-slate-300 rounded-full p-4"
					src="/img/html_css_js.png"
				/>
				<span class="text-xl">Intermediate</span>
			</div>
			<div class="flex fc flex-col">
				<div class="bg-slate-300 rounded-full p-4 flex flex-row">
					<img class="h-12" src="/img/vue.png" />
					<img class="h-12" src="/img/bun.png" />
				</div>
				<span class="text-xl">Intermediate</span>
			</div>
		</div>

		<div class="mt-20 text-xl">
			สกิลระดับพื้นฐาน และปัจจุบันไม่ได้ใช้งานแล้ว
		</div>
		<div class="mt-8 flex fc gap-8">
			<div class="flex fc flex-col">
				<img
					class="h-20 bg-slate-200 rounded-full p-4"
					src="/img/python.png"
				/>
				<span class="text-xl">2 Year Advance</span>
			</div>
			<div>และอื่นๆ C, Asesmbly, Java ในระดับพื้นฐาน</div>
		</div>
	</div>
</template>

<style>
@import url("HomeView.css");
</style>
