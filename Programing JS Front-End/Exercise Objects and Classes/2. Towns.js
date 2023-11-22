function towns(towns) {

    for (const currentTown of towns) {

        //let row=currentTown.split(' | ');
        // let town=row[0];
        // let latitude=row[1];
        // let longtitude=row[2];
        
        let [town, latitude, longitude]=currentTown.split(' | ');
        
        let currentTownInfo={
            town: town,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        }
        console.log(currentTownInfo);
    }
    
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);