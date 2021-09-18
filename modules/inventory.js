"use strict"

const inventoryScreen = () => {
	return `
	<h2>Inventory</h2>
	<small class="text-muted">Space: 3 / 10</small>

	<div class="row mt-4">
		<ul class="col-6 list-group list-group-horizontal">
  			<li class="list-group-item" type="button">Shovel</li>
  			<li class="list-group-item" type="button">Butter Knife</li>
  			<li class="list-group-item" type="button">Lizard Shoes</li>
		</ul>

		<div class="col-6">

		<div class="equip-screen">
			<div class="row justify-content-center">
				<div class="equip-screen-box">Head</div>
			</div>
			<div class="row justify-content-between">
				<div class="equip-screen-box">Cape</div>
				<div class="equip-screen-box">Neck</div>
				<div class="equip-screen-box">Arrows</div>
			</div>
			<div class="row justify-content-between">
				<div class="equip-screen-box">Left Hand</div>
				<div class="equip-screen-box">Chest</div>
				<div class="equip-screen-box">Right Hand</div>
			</div>
			<div class="row justify-content-center">
				<div class="equip-screen-box">Legs</div>
			</div>
			<div class="row justify-content-between">
				<div class="equip-screen-box">Gloves</div>
				<div class="equip-screen-box">Boots</div>
				<div class="equip-screen-box">Ring</div>
			</div>
		</div>
		<dl class="row">
  <dt class="col-sm-3">Accuracy</dt>
  <dd class="col-sm-3">+0</dd>
    <dt class="col-sm-3">Strength</dt>
  <dd class="col-sm-3">+0</dd>
      <dt class="col-sm-3">Defense</dt>
  <dd class="col-sm-3">+0</dd>
        <dt class="col-sm-3">Magic</dt>
  <dd class="col-sm-3">+0</dd>
        <dt class="col-sm-3">Range</dt>
  <dd class="col-sm-3">+0</dd>
        <dt class="col-sm-3">Luck</dt>
  <dd class="col-sm-3">+0</dd>
  </dl>
		</div>

		<div id='inv-lines'></div>

	</div>

	`
}

// Draws the lines connecting the inventory slots
const drawSVG = () => {
	const invObj = {}
	let svgLine = ``
	const elements = document.querySelectorAll(".equip-screen-box")

	const invParts = [
		"head",
		"cape",
		"neck",
		"arrows",
		"lefthand",
		"chest",
		"righthand",
		"legs",
		"gloves",
		"boots",
		"ring"
	]

	elements.forEach((ele, key) => {
		invObj[invParts[key]] = new Object()

		invObj[invParts[key]]["x"] =
			ele.offsetLeft + ele.offsetParent.offsetLeft + ele.clientWidth / 2
		invObj[invParts[key]]["y"] =
			ele.offsetTop + ele.offsetParent.offsetTop + ele.clientHeight / 2
	})

	function attachSVGDivs() {
		populateSVGLines(invObj.head, invObj.neck)
		populateSVGLines(invObj.cape, invObj.neck)
		populateSVGLines(invObj.neck, invObj.arrows)
		populateSVGLines(invObj.neck, invObj.chest)
		populateSVGLines(invObj.lefthand, invObj.chest)
		populateSVGLines(invObj.chest, invObj.righthand)
		populateSVGLines(invObj.chest, invObj.legs)
		populateSVGLines(invObj.legs, invObj.boots)
		populateSVGLines(invObj.gloves, invObj.boots)
		populateSVGLines(invObj.boots, invObj.ring)
	}

	function populateSVGLines(a, b) {
		svgLine += `<svg width="100%" height="100%" style="position:absolute;z-index:-1;"><line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="black"/></svg>`
	}

	attachSVGDivs()

	document.querySelector("#inv-lines").innerHTML = `${svgLine}`
}

export {inventoryScreen, drawSVG}
