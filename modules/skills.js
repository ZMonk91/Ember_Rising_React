"use strict"

const skillsScreen = () => {
	return `
    <h2>Skills</h2>
    <div class="row">
        <div class="title col-12"><strong> Physical</strong></div>
        <ul class="list-unstyled col-12">
            <div class="row justify-content-between">
                <div class="col-2">Strength</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
                            <div class="row justify-content-between">
                <div class="col-2">Attack</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Defense</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Constitution</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
        </ul>

        <div class="title col-12"><strong> Arcane</strong></div>
        <ul class="list-unstyled col-12">
                    <div class="row justify-content-between">
                <div class="col-2">Alchemy</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
                            <div class="row justify-content-between">
                <div class="col-2">Magic</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Enchantment</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Runecrafting</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
        </ul>
        <div class="title col-12"><strong> Natural</strong></div>
        <ul class="list-unstyled col-12">
                    <div class="row justify-content-between">
                <div class="col-2">Mining</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
                            <div class="row justify-content-between">
                <div class="col-2">Foraging</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Fishing</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Cooking</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
                                            <div class="row justify-content-between">
                <div class="col-2">Smithing</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Crafting</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>

                            <div class="row justify-content-between">
                <div class="col-2">Hunting</div>
                <div id="str_prog" class="col-8">1/100 xp</div>
                <div id="str_lvl" class="col-1">1</div>
                </div>
        </ul>

    </div>

    `
}

export {skillsScreen}
