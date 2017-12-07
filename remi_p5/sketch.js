var lexicon;




function setup() {
  createCanvas(500, 500);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(22);
  textAlign(CENTER, CENTER);
  text("Click for fun", width/2, height/2);
}





function mousePressed() {
  background(50);
  textAlign(LEFT, TOP);

  var output = "I live it up like these are my last  " +
    findRhymes("days") + " " +
    " If time is money, I'm an hour past  " +
    findRhymes("paid") + ", " + 
    " Ugh, gunpowder in my  " +
    findRhymes("hourglass") + " " +
     " Niggas faker than some flour in a powder  " +
    findRhymes("bag") + " " +
    lexicon.randomWord("nn");
  text(output, 10, 10, width-20, height-20);
}

function findRhymes(word) { // called by timer
  var tmp = '';
  do {
    tmp = lexicon.rhymes(word);
  } while(word && tmp.length < 3)
  rhymeIndex = random(0, tmp.length);
  rhyme = tmp[int(rhymeIndex)];
    return rhyme;
}

function postTag(output) {

RiTa.getPosTags("");

}