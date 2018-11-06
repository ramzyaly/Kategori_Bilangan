var kategori=[]; 
var prima=[]; 

function bilangan(x){
    if(x%1==0){
        kategori.push("bulat")    
    }

        if(x>=0){ 
            kategori.push("cacah")  
        }  
        if(x<0){ 
            kategori.push("negatif")
        }
        
            if(x!=0 && x>0){ 
                kategori.push("asli")
            }
            if(x==0){ 
                kategori.push("nol")
            }
            
                if(x%2==0){ 
                    kategori.push("genap")
                }
                if(x%2!=0){ 
                    kategori.push("ganjil")
                }
        
        if(x==2 || x==3)
        { 
            kategori.push("prima")
        }
        else if(x>3)
        {
            for(y=2;y<x;y++) {
                prima.push(x%y)
            }
            if(prima.includes(0)==true && x>1){
                kategori.push("komposit")   
            }
            else{
                kategori.push("prima")
            }
        }
    return kategori
}
console.log(bilangan(11))