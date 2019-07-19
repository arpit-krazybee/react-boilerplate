import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:1}
        ]
     };

    

    render() { 
        return (<div>
            
           { this.state.counters.map(counter =>(
             <Counter key={counter.id} value={counter.value} id={counter.id}/>))}
        </div>  );
    }
}
 
export default Counters;