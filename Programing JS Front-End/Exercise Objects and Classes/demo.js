function jsObjects() {

    let obj={
        name:'Ivo',
        age:30,
        friends:[
            {
                name:'Rado',
                age:24
            },
            {
                name:'Vasil',
                age:30
            }
        ]
    };

    let obj2=JSON.parse(JSON.stringify(obj)); // copie(cloning) object
    obj.age=40;
    
}

jsObjects();