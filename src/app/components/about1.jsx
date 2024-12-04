import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function About1() {
  return (
    <div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">ABOUT THE DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
                The Department of Artificial Intelligence and Data Science is a newly added department, founded in 2022. The department aims to develop technocrats in the domain of emerging technology by making them ethical professionals with innovative knowledge and scientific temper to enrich the society ready to face global challenges. The department has a vision to expand and further the research, education and outreach activities in the areas of data science and artificial intelligence. The department carries out research in these two areas, and aims to become a world leader in data science research, where long-standing fundamental research problems across multiple disciplines are targeted and solved.
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
                The department undertakes foundational research in several areas of AI and data science - deep learning, reinforcement learning, network analytics, interpretable machine learning, and domain aware AI. The department comprises faculty from several departments across the Institute, who carry out research in various areas of data science and artificial intelligence. This specialized B.Tech. course is specially designed to enable students to build intelligent machines, software, or applications with a cutting-edge combination of machine learning, analytics and visualization technologies.
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About1