function areaOfFigures (input){

    let type= input[0];
        let area=0.0;
        if (type==="square") {
            let side=Number(input[1]);
            area=side*side;
        } else if (type==="rectangle") {
            let sideA=Number(input[1]);
            let sideB=Number(input[2]);
            area=sideA*sideB;
        }else if (type==="circle") {
            let r=Number(input[1]);
            area=r*r*Math.PI;
        }else if (type==="triangle") {
            let sideA=Number(input[1]);
           let sideH=Number(input[2]);
            area=sideA*sideH/2;
        }
        console.log(area);
    }
