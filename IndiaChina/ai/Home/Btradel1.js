import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

function Btradel1(props) {
    const data=props.data;
    const Ref=useRef();
    useEffect(()=> {
        d3.csv("./Book1.csv").then(function (data) {
            console.log(data)
        })
    });
    useEffect(()=>{

            const height="400px";
            const width="900px";
            const svg=d3.select(Ref.current);
            svg.attr("width",width)
                .attr("height",height)
                .style("background-color","whilte");
            var yScale=d3.scaleLinear()
                .domain([-3,3])
                .range([350,0]);
            var xScale=d3.scaleLinear()
                .domain([1996,2001])
                .range([0,400]);
            var yAxis=d3.axisLeft().scale(yScale)
                .tickFormat(function(d){return d+"%";});
            var xAxis=d3.axisBottom().scale(xScale)
                .ticks(6);
            svg.append("g").attr("transform","translate(75,25)").call(yAxis);
            svg.append("g").attr("transform","translate(75,200)").call(xAxis);
            var bar=svg.selectAll("rect").data(data);
            bar.enter().append("rect")
                .attr("width",function(d){return 25+"px";})
                .attr("x",function(d,i){return 75+ xScale(d.Year);})
                .attr("y",0)
                .transition().duration(300)
                .attr("height",function(d){return yScale(d.TD)+"px";})
                .attr("y",function(d){return (300-yScale(d.TD))+"px";})
                .style("fill","brown");
        }

    );
      return (
        <div>
            <svg ref={Ref}></svg>
        </div>
    )
}

export default Btradel1;


