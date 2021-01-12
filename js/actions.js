const actions = {

    list: ['search'],
    active_action: false,

    generate(){
        if(typeof map.current_active == 'string'){
            let act = qs('#actions_content');
            act.innerHTML = '';
            // based on the tile we're on, generate actions
            this.list.forEach((item) => {
                act.innerHTML = act.innerHTML+'<button id="action_'+item+'" class="btn btn-primary">'+item+'</button>';
                // set listener
                qs('#action_'+item).addEventListener('click', () => {
                    actions[item]();
                });
            });
        }
    },

    search(){
        // perform search
        chat('You began searching '+map.current_active);
        // check if active action
        // progress bar animation
        ui.bar('action', 5);
        // did ye find something?
    },

}