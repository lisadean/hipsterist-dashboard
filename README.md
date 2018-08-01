# Hipster-Dashboard

<p align='center'>
    <img src='#' alt='homepage'></img>
</p>

# [Live Demo](**INSERT SURGE***)


## Overview:
Given the time restrictions of the assignment, our group decided to create a dashboard of stand-alone components crafted individually and bound collectively in one place.  Although a robust React application in total, we focused on the basic principles of the library.


## Built by:

[Beth D'Amato](https://github.com/badamato)  
Contributions: Pomodoro Component, Trello Project Board, README.md

[Lisa Dean](https://github.com/lisadean)  
Contributions: Project Randomizer Component, README.md

[Aylin DeBruyne](https://github.com/adebruyne)  
Contributions: Weather Component, Main Dashboard Styling, README.md

[Delia Sanders](https://github.com/Dsande41)  
Contributions: Movie Component, README.md


## Built with:

* React.js
* Bootstrap/CSS
* Node.js
* Third-Party API's


## Project Whiteboarding

<p align='center'>
    <img src='readme/trello.png' alt='project dashboard'></img>
</p>


## Obstacles and Breakthroughs

*The Pomodoro (Beth) -*
Getting my head around how to set the base time of my application and then work the knowledge of increment/decrement them in sync.  I confess, I had to consult multiple resources to understand logic blocks like those below.  I spent an hour or two remembering to 'parseInt' my add methods (thank you Zac Braddy for that, https://zackerthehacker.com/).

```
    handleChange(ev) {
        const newBaseTime = this.props.baseTime;
    
        if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hour'), 
        'hours').add(parseInt(ev.target.value, 10), 'hours');
        
        if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'),
        'minutes').add(parseInt(ev.target.value, 10), 'minutes');
        
        if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'),
        'seconds').add(parseInt(ev.target.value, 10), 'seconds');
    
        this.props.setBaseTime(newBaseTime);
    }
```

*SAMPLETWO -*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend enim at nunc aliquam, dapibus sodales libero malesuada. Maecenas non convallis arcu, quis molestie mi. Sed volutpat dignissim laoreet. Vestibulum lacinia faucibus pellentesque. Nullam et convallis mi, in rhoncus nisl.
```
add code snippet here
```

*SAMPLETHREE -*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend enim at nunc aliquam, dapibus sodales libero malesuada. Maecenas non convallis arcu, quis molestie mi. Sed volutpat dignissim laoreet. Vestibulum lacinia faucibus pellentesque. Nullam et convallis mi, in rhoncus nisl.
```
add code snippet here
```

*SAMPLEFOUR -*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend enim at nunc aliquam, dapibus sodales libero malesuada. Maecenas non convallis arcu, quis molestie mi. Sed volutpat dignissim laoreet. Vestibulum lacinia faucibus pellentesque. Nullam et convallis mi, in rhoncus nisl.
```
add code snippet here
```



## License 
*Copyright 2018 Beth D'Amato, Lisa Dean, Aylin DeBruyne, Delia Sanders*

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
