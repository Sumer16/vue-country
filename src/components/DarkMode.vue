<template>
  <div>
    <input type="checkbox" class="checkbox" id="checkbox" v-on:change="toggleDark">
    <label for="checkbox" class="label">
      <span class="material-icons moon">brightness_4</span>
      <span class="material-icons sun">brightness_7</span>
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'DarkMode',
  methods: {
    toggleDark() {
      document.body.classList.toggle('dark-mode');
    }
  }
}
</script>

<style>
.dark-mode{
  background-color: #151515;
}

.checkbox {
	opacity: 0;
	position: absolute;
}

.label {
	background-color: #111;
	border-radius: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	position: relative;
	height: 26px;
	width: 50px;
	transform: scale(1.5);
}
.label .ball {
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	top: 2px;
	left: 2px;
	height: 22px;
	width: 22px;
	transform: translateX(0px);
	transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
	transform: translateX(24px);
}

.moon {
  font-size: 1.2rem;
	color: #f1c40f;
}
.sun {
  font-size: 1.2rem;
	color: #f39c12;
}
</style>