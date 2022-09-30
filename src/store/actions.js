
export default  function changelang(langdata){

    return{
        type:'SET_Language',
        payload:langdata

    }
       
}
export  function setfavs(tofav){

    return{
        type:'SET_Fav',
        payload:tofav

    }
       
}