// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtn = document.querySelector('.like-glyph')
const bodyObj = document.querySelector('body')


bodyObj.addEventListener('click', event => {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.textContent = FULL_HEART
    event.target.className = 'activated-heart'
    mimicServerCall("fake_call")
      .then(console.log)
      .catch(() => {
        alert("Uh oh there is an error")
      })
  } else if (event.target.textContent === FULL_HEART) {
      event.target.textContent = EMPTY_HEART
      event.target.className = ""
    } 
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
