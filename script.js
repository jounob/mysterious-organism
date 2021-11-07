// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//console.log(mockUpStrand())
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let newDna = [];
      let base = returnRandBase();
      let randomIndex = Math.floor(Math.random()*this.dna.length);
      newDna = this.dna.splice(randomIndex, 1, base); 
    return this.dna;     
    },
    compareDNA(otherSpecimen){
      let cont = 0;
      for(let i = 0; i < this.dna.length;i++){
        let base = this.dna[i];
        let otherBase = otherSpecimen.dna[i];
        //console.log(base + ' nd ' + otherBase)
        if(base === otherBase){
          cont++ 
        }
      }
      //console.log(cont)
      let percentDna = (cont / this.dna.length)*100;
      let fixedDna = percentDna.toFixed(2);
      console.log(`Specimen ${this.specimenNum} and Specimen ${otherSpecimen.specimenNum} have ${cont} element in common and have ${fixedDna}% their ADN en common`)
    },
    willLikelySurvive(){
      let cont = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          cont++;
        }
      }
      //console.log(cont)
      let percentSurvive = (cont * 100) / this.dna.length;
      //console.log(percentSurvive) 
      if(percentSurvive >= 60){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
let createPAequor = [];
let contPAequor = 1; 
while(createPAequor.length < 30){
  let newPAequor = pAequorFactory(contPAequor, mockUpStrand());
  if(newPAequor.willLikelySurvive()){
    createPAequor.push(newPAequor)
  }
  contPAequor++
}

console.log(createPAequor)
//console.log(specimen1.compareDNA(specimen2));
//console.log(specimen1.willLikelySurvive())










