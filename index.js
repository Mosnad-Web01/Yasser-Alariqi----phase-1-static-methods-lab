class Formatter {

  static capitalize( str ) {
    return str.charAt( 0 ).toUpperCase() + str.slice( 1 )
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize(str) {
    const lowercaseWords = ['and', 'for', 'of', 'at', 'by', 'from', 'to', 'a', 'an', 'the', 'but'];

    return str.split(' ').map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word)) {
        return Formatter.capitalize(word);
      } else {
        return word;
      }
    }).join(' ');
  }
}