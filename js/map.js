const map = {

    rows: 16,
    cols: 22,
    width: 50,
    height: 50,
    current_active: false,

    // onload, generate a map
    create(){
        dump('Generating Map...', true);
        let map = qs('#map');

        // setup the map size
        let total_width = this.cols * this.width;
        let total_height = this.rows * this.height;
        map.style = 'width: '+total_width+'px;height:'+total_height+'px;';

        // populate the map with squares
        let grid = '';
        for(r=1;r<=this.rows;r++){
            let row = '';
            for(c=1;c<=this.cols;c++){
                row += '<td class="sand" id="r'+r+'c'+c+'"></td>';
            }
            grid += '<tr id="r'+r+'">'+row+'</tr>';
        }
        map.innerHTML = grid;
        this.grid_listener();
        chat('You find yourself on a desert planet with nothing around.');
    },

    // lisen for clicks on the map
    grid_listener(){
        let tiles = qsa('#map tr td');
        Array.from(tiles).forEach(tile => {
            tile.addEventListener("click",() => {
                let cl = tile.id;
                // remove active from all other tiles
                Array.from(tiles).forEach(tile => {
                    tile.classList.remove('table-active');
                });

                // add active class to tile just clicked
                tile.classList.add('table-active');
                this.current_active = cl;
                dump(cl);

                // generate actions based on current active tile
                actions.generate();
            });
        });
    }

}