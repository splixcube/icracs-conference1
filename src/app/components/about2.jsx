import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function About2() {
  return (
    <div>
         <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">ABOUT ICRACS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
<Card>
  <CardContent className="p-4 md:p-6">
    {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
    Recent years have witnessed the evolution of Artificial Intelligence [AI] techniques like deep learning, machine learning, pattern recognition, Natural language processing [NLP], and computer vision and their revolutionary applications in the emerging smart city and industrial automation applications. In this scenario, AI provides smart and efficient tools for smart energy systems to perform smart electricity generation, emergency response, and delivery. The integration of renewable energy sources into the smart grid is made easier by using Artificial intelligence technologies. Meanwhile, Machine Learning the subset of Artificial intelligence provides some security and privacy assessment tools to the evolving smart energy grids
  </CardContent>
</Card>

<Card>
  <CardContent className="p-4 md:p-6">
    {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
    As Artificial Intelligence [AI] techniques are still remaining in the initial stage to revolutionize the way we generate, transmit and consume the energy in the smart city and industrial infrastructure. It is clearly known that the integration of AI in smart energy models will deliver a wide range of potential research opportunities to the smart energy management community. The main goal of the International Conference on Recent Advances in Artificial intelligence, Computer Vision & Smart Systems (ICRACS 2024) organized by Department of Artificial Intelligence & Data Science, Poornima Institute of Engineering and Technology, Jaipur, Rajasthan, India in April, 2024 is to propose, share and exchange innovative Artificial Intelligence [AI] solutions to enhance the efficiency, stability, robustness, and security of smart energy systems.
  </CardContent>
</Card>


          </div>
        </div>
      </section>
    </div>
  )
}

export default About2