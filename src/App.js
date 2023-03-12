import 'bulma/css/bulma.css'
import FraudCard from "./FraudCard";
import Arod from './images/arod.jpg'
import CrushDavis from './images/chrisdavis.png'
import Jose from './images/cancesco.jpg'

import React from 'react'

export default function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Professional Steroid Users</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <FraudCard
                title="Alex Rodriguez"
                handle="@roids420"
                image={Arod}
                description="He's the worst"
              />
            </div>
            <div className="column is-3">
              <FraudCard
                title="Chris Davis"
                handle="@cheater69"
                image={CrushDavis}
                description="Right after Bobby Bonilla day, there's Chris Davis day. Maybe he didn't do steroids."
              />
            </div>
            <div className="column is-3">
              <FraudCard
                title="Jose Cancesco"
                handle="@bashbro666"
                image={Jose}
                description="Rat"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
