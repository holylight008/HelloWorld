function Printx(x:number):void{
    let i,j:number=0;
    
    for(i=0;i<x;i++){
        let t :string="";
        for(j=0;j<x+i;j++){
            if(j<x-i-1){
                t+=" ";
            }
            else{
                t+="*";
            }
        }
        console.log(t);
    }
}
let x:string=process.argv[2];

Printx(parseInt(x));
