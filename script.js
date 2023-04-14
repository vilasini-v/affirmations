const affirmations = [
    {quote: "I am capable of achieving anything I set my mind to."},
    {quote: "I am worthy of love and respect."},
    {quote: "I am strong and resilient."},
    {quote: "I trust in my abilities to overcome challenges."},
    {quote: "I radiate positivity and attract good things into my life."},
    {quote: "I am grateful for all the blessings in my life."},
    {quote: "I am confident in myself and my decisions."},
    {quote: "I choose to let go of negative thoughts and emotions."},
    {quote: "I am deserving of happiness and success."},
    {quote: "I am in control of my own life and destiny."},
    {quote: "I am surrounded by positive energy and good vibes."},
    {quote: "I am open to new experiences and opportunities."},
    {quote: "I am blessed with an abundance of love and joy."},
    {quote: "I have the power to create the life of my dreams."},
    {quote: "I am at peace with myself and the world around me."},
    {quote: "I am confident in my own unique talents and gifts."},
    {quote: "I am grateful for my health and well-being."},
    {quote: "I am deserving of respect and kindness from others."},
    {quote: "I am constantly growing and evolving as a person."},
    {quote: "I am worthy of success and prosperity."},
    {quote: "I am grateful for the love and support of my friends and family."},
    {quote: "I am capable of adapting to any situation."},
    {quote: "I trust in the journey of my life."},
    {quote: "I am worthy of forgiveness and compassion."},
    {quote: "I am filled with positive energy and vitality."},
    {quote: "I am confident in my own skin and embrace my uniqueness."},
    {quote: "I am a powerful creator and manifest my dreams into reality."},
    {quote: "I am surrounded by love and positivity in all areas of my life."},
    {quote: "I choose to focus on the good and let go of negativity."},
    {quote: "I am grateful for the opportunities and experiences that come my way."},
    {quote: "I am deserving of respect and consideration from others."},
    {quote: "I am confident in my own opinions and ideas."},
    {quote: "I am blessed with a loving and supportive community."},
    {quote: "I am worthy of peace and tranquility in my life."},
    {quote: "I am capable of achieving my goals and aspirations."},
    {quote: "I am grateful for the beauty and wonder of the world around me."},
    {quote: "I am constantly learning and growing as a person."},
    {quote: "I am deserving of abundance and prosperity in all areas of my life."},
    {quote: "I am open to new perspectives and ideas."},
    {quote: "I am surrounded by positive and supportive people."},
    {quote: "I choose to let go of negative self-talk and embrace self-love and acceptance."},
    {quote: "I am grateful for my talents and abilities."},
    {quote: "I am deserving of love and happiness in all areas of my life."},
    {quote: "I am confident in my ability to handle any challenges that come my way."},
    {quote: "I trust in the universe to guide me towards my highest good."}
    
  ];
  function generateAffirmation() {
    const affirmationIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[affirmationIndex].quote;
    const affirmationElement = document.getElementById("quote");
    affirmationElement.innerHTML = affirmation;
    if (affirmation.length > 50) {
        affirmationElement.classList.add('long-quote');
    } else {
        affirmationElement.classList.remove('long-quote');
    }
}
  
function twtQuote() {
    const affirmationElement = document.getElementById("quote");
    const affirmation = affirmationElement.innerText;
    const twturl =`https://twitter.com/intent/tweet?text=${affirmation}&hashtags=affirmation`;
    window.open(twturl,'_blank');
}
  
const twitterBtn = document.getElementById('twitter');
twitterBtn.addEventListener('click', twtQuote);


  //tweet
//   function shareOnFacebook() {
//     const quote = document.getElementById('quote').innerText;
//     const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
//     const url = encodeURIComponent(window.location.href);
//     window.open(facebookUrl + url + '&quote=' + encodeURIComponent(quote));
//   }
  
