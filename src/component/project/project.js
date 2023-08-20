import React from 'react'
import "./p.scss"
const Project = () => {
  return (
    <> 
    <div className='mp'>
    <h1>
        My Work
    </h1>
        <div class="project">
        <div class="project-title">Expense Tracker</div>
        <div class="project-description">
            Keeps track of your expenses.
        </div>
        <div class="technology-used">
            Technology Used: HTML | CSS | JavaScript | React JS
        </div>
        <a href="#" class="click-link">Click Here to open.</a>
    </div>

    <div class="project">
        <div class="project-title">Speed Test</div>
        <div class="project-description">
            A website for evaluating typing speed.
        </div>
        <div class="technology-used">
            Technology Used: HTML | CSS | JavaScript
        </div>
        <a href="#" class="click-link">Click Here to open.</a>
    </div>

    <div class="project">
        <div class="project-title">Playing Drum Website</div>
        <div class="project-description">
            Website is fully responsive.
        </div>
        <div class="technology-used">
            Technology Used: HTML | CSS | Bootstrap | JavaScript
        </div>
        <a href="#" class="click-link">Click Here to open.</a>
    </div>

    <div class="project">
        <div class="project-title">Tindog Website</div>
        <div class="project-description">
            A layout of a dog website which is fully responsive in nature.
        </div>
        <div class="technology-used">
            Technology Used: HTML | CSS | Bootstrap | JavaScript
        </div>
        <a href="#" class="click-link">Click Here to open.</a>
    </div>
    </div>
    </>
  )
}

export default Project