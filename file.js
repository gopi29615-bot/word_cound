let text = "html or css file create file in html";
let words =text.toLowerCase().split(" ");
let count ={};
for(let word of words){
    if(count[word]){
        count[word]++;
    } else {

        count[word] = 1;
    }

    
}
let sortewords = object.entries(count)
.sort((a,b => b[1] - a[1]));
console.log("top 3 most common words:");
for(let i=0;i<3;i++){
    console.log(sortewords[i][0] + " : " + sortewords);
}