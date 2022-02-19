
const usuarios = new Map();

usuarios.set('primo' , 'Admin' );
usuarios.set('prima', 'Admin');
usuarios.set('01', 'User');
usuarios.set('02', 'User');
usuarios.set('03', 'Admin');



function getAdmins(map){
    let admins = [];

    for([key,value] of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}




console.log(getAdmins(usuarios));