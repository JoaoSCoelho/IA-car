function rollTo(elementClass) {
  const allFeatureCard = document.querySelectorAll('.feature-card')
  const featureCardClicked = document.querySelector(`.feature-card.${elementClass}`)
  
  allFeatureCard.forEach((ele) => {
    ele.classList.remove('highlighted')
    
    const elementImgSrc = ele.querySelector('img').src

    ele.querySelector('img').src = elementImgSrc.split('-white').join('')
  })

  featureCardClicked.scrollIntoView()
  window.scrollBy({
    top: - (window.innerHeight / 2) + 100
  })
  featureCardClicked.classList.add('highlighted')

  const featureCardClickedImgSrc = featureCardClicked.querySelector('img').src

  featureCardClicked.querySelector('img').src = featureCardClickedImgSrc.slice(0, -4) + '-white.svg'
}