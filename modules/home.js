"use strict"

const homeScreen = () => {
	return `
    <h2> Home </h2>
    <dl class="row">
    <dt class="col-6">Current Location</dt>
    <dd class"col-6"> <em>Starting Land</em></dd>
    <dt class="col-6">Location Bonus</dt>
    <dd class"col-6"> <em>No Bonus</em></dd>
        <dt class="col-6">House Type</dt>
    <dd class"col-6"> <em>Homeless</em></dd>
    </dl>

    <div class="card">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Homeless</h6>
            You currently don't have a home yet. <br> Try looking in the market for something that may help.
        </div>
    </div>




<div> <h4 class="text-muted mt-4"> Stats </h4>
<p>Coming Soon...</p></div>

`
}

export {homeScreen}
