import React from 'react'

const About = () => {
  return (
    <div className='component'>
      <h2 className='text-light'>About Me</h2><hr/>
      <figure className="figure mb-4">
        <img className="figure-img img-fluid rounded" src='../images/profile.jpg' alt="profile of myself sitting on a couch looking at a laptop on the coffee table in front. The book The Subtle Art of Not Giving a F*ck is to the left of the laptop and a black coffee mug is to the right alongside my cellphone." />
        <figcaption className="figure-caption signature bg-gold text-dark p-2">Byron Mosley</figcaption>
      </figure>
      <div className="short-bio text-light">
        <p>I am a full stack web developer and web designer based out of Phoenix, AZ. I work with the PERN stack, which relies heavily on JavaScript on both the front and back end. I strongly look forward to working in a group of programmers so I may not only learn but reinforce my understanding of code. Whether it be exploring my artistic ability through web design or my critical thinking analysis and testing my logic through web development, I am very excited to connect with people and contribute to the growth of the web.</p>
        
        <p>Outside of the coding world, I also enjoy creating composite images in Photoshop, going out and taking photos in the city or in the wild, or finding some other artistic avenue to keep me going. I love discovering new musicians and genres, would love to be fluent in either the guitar or drums, and aspire to be a polyglot (being multilingual for the fun of it). The top three languages at this moment would be Japanese, German, and Spanish (in no particular order).</p>
        
        <p>Some of the top items on my bucket list include skydiving (and eventually banzai skydiving), scuba diving a coral reef, publishing my own novel, visiting Japan, and learning to snowboard.</p>
      </div>
    </div>
  )
}

export default About
