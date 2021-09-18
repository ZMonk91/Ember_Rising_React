"use strict"

// Import Modules
import {drawSVG, inventoryScreen as view_inv} from "../modules/inventory.js"
import {homeScreen as view_home} from "../modules/home.js"
import {skillsScreen as view_skills} from "../modules/skills.js"
// import { inventoryScreen } from `../modules/inventory.mjs`;
// import `../modules/inventory.mjs`;

// let view_inv = inventoryScreen

$(function () {
	// Navigation Collapse Button
	$(`#nav-toggle-btn`).on("click", () => {
		$(`navbar`).toggleClass(`col-1 col-3 nav-collapsed`)
		$(`game-wrapper`).toggleClass(`col-11 col-9`)
		$(`.navbar-label`).toggleClass(`d-none`)
	})

	// Chat
	$(`#chat-submit-btn`).on(`click`, () => {
		$(`.chat-log`).prepend(
			`<row>12:05 Username: ${$(`#chat-input`).val()}</row>`
		)
		$(`#chat-input`).val(``)
		console.log($(`#chat-input`).val())
	})
})

// Pre-load Content
const loadContent = () => {
	let contentDiv = document.getElementById("app")
	let fragmentId = location.hash.substr(1) // Remove beginning `#` from string

	getContent(fragmentId, (content) => {
		contentDiv.innerHTML = content
	})

	location.hash === "#inventory" ? drawSVG() : null
}

// Grab Content, Asynchronous Callback
const getContent = (fragID, callback) => {
	let pages = {
		home: view_home(),
		inventory: view_inv(),
		skills: view_skills()
	}

	pages[fragID]
		? callback(pages[fragID])
		: callback(`Page not found...GO MAKE IT!`)
}

// Set Default Hash on page load
location.hash ? null : (location.hash = `#home`)

// Load Inv Screen Functions

loadContent()
window.addEventListener("hashchange", loadContent)

window.addEventListener("resize", (e) => {
	drawSVG()
})
drawSVG()
