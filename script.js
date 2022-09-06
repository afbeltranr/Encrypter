
function copy(){
    let result = document.getElementById('result');
    result.select()
    document.execCommand('copy'); 
    result.value = ''
}