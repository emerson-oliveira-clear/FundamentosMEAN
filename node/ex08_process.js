function temParam (param){
    return process.argv.indexOf(param) !== -1
}

if(temParam('--produção')){
    console.log('atenção total!!!')
}else{
    console.log('tranquilo!!!')
}