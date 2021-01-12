function qs(str){
    return document.querySelector(str);
}

function qsa(str){
    return document.querySelectorAll(str);
}

function dump(input, chat = false){
    if(chat != false){
        // rework this with a compatible scope so we can just call:
        // chat(input);
        let chat_content = '';
        chat_content = qs('#log_content').innerHTML;
        qs('#log_content').innerHTML = '<p>'+input+'</p>'+chat_content;
    }
    console.log(input);
}

function chat(str){
    let chat_content = '';
    chat_content = qs('#log_content').innerHTML;
    qs('#log_content').innerHTML = '<p>'+str+'</p>'+chat_content;
}