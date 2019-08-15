var jsdom = require("jsdom");
const dom = new jsdom.JSDOM("<html><body id='cards'><div class= 'card'  data-deck='cake'><img class= 'back' src='cake.png' alt='cake' /><img class='front' src='card2.jpg' alt='card2' /></div><div class= 'card'  data-deck='cake'><img class= 'back' src='cake.png' alt='cake' /><img class='front' src='card2.jpg' alt='card2' /></body></html>")
global.document = dom.window.document;
var game = require("../game.js")

var cardFlipper = game.cardFlipper;
var matching = game.matching;
var shuffle = game.shuffle;


beforeEach(function() {
    global.window = dom.window;
    global.navigator = dom.window.navigator;
    });

describe("cardArray", function() {
    it ("should read the card array",function(){
        expect(global.document.getElementById("cards").innerHTML).toBeDefined();
    })

    it('should be able to push cards in an array', function() {
    var cardArray= [...global.window.document.getElementsByClassName("card")];
    expect(cardArray).toEqual([...global.window.document.getElementsByClassName("card")])
  
    });
});
describe('shuffle',function(){
    it("should randomly shuffle the cards", function() {
    var cardArray= [...global.window.document.getElementsByClassName("card")]   
    expect(shuffle(cardArray)).toBe("shuffled");
    });
})
