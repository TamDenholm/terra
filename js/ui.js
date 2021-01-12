const ui = {

    bar(type, seconds){
        let el = qs('#'+type+'_bar');
        let timer = 0;
        let interval = 50;
        let animation = setInterval(() => {
            let width = ((seconds * 1000) / interval) - timer / interval;
            el.style = 'width:'+width+'%';
            console.log(width);
            if(timer >= seconds * 1000){
                clearInterval(animation);
                el.style = 'width:100%';
            }
            timer += interval;
        }, interval);
    }

}