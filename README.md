# Hipster-Dashboard

<p align='center'>
    <img src='#' alt='homepage'></img>
</p>

# [Live Demo](**INSERT SURGE***)


## Overview:
 


## Built by:

[Beth D'Amato](https://github.com/badamato)  
Contributions: Pomodoro Component, Trello Project Board, README.md

[Lisa Dean](https://github.com/lisadean)  
Contributions: Project Randomizer Component, README.md

[Aylin DeBruyne](https://github.com/adebruyne)  
Contributions: Weather Component, README.md

[Delia Sanders](https://github.com/Dsande41)  
Contributions: Movie Component, README.md


## Built with:

* React.js
* Bootstrap
* Node.js
* Third-Party API's


<p align='center'>
    <img src='#' alt='??'></img>
</p>


## Project Whiteboarding

<p align='center'>
    <img src='readme/trello.png' alt='project dashboard'></img>
</p>



## Minimum Viable Product

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisl mattis, auctor nunc nec, vehicula diam. Vivamus pharetra tristique fringilla. Curabitur accumsan orci dui, vitae dignissim lacus imperdiet in. Donec molestie semper arcu, ac tempor ante varius vitae. In nisi eros, bibendum eget dui vitae, mollis ultrices massa.



## Obstacles and Breakthroughs

*The Pomodoro -*
Getting my head around how 
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
