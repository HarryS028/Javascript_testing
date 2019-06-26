module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  
  this.processor = function(string) {
    return this.letters().toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  
  //Returns the letters in the content.
  this.letters = function letters () {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  
  // Makes the phrase LOUDER.
  this.louder = function() {
    let loudcontent = this.content.toUpperCase();
    return loudcontent;
  };
}

//Defines a translated phrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
  return this.processor(this.translation);
  }
}