$(function(){ // on dom ready

$('#cy').cytoscape({
  layout: {
    name: 'cose',
    padding: 10
  },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: 'Carsow', name: '01', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Dean', name: '02', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Mandeval', name: '03', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Pitta', name: '04', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Reynolds', name: '05', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Weiser', name: '06', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Alicia', name: '07', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Julia', name: '08', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Margit', name: '09', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      
      { data: { id: 'Jacqueline', name: '10', weight: 45, faveColor: '#EDA1ED', faveShape: 'ellipse' } },
      { data: { id: 'Jeanne', name: '11', weight: 45, faveColor: '#EDA1ED', faveShape: 'ellipse' } }
 	],
    
    edges: [
      { data: { source: 'Jeanne', target: 'Carsow', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Jeanne', target: 'Dean', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Jeanne', target: 'Mandeval', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Jeanne', target: 'Weiser', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Jeanne', target: 'Alicia', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Jeanne', target: 'Margit', faveColor: '#86B342', strength: 80 } },
     
      { data: { source: 'Jacqueline', target: 'Carsow', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Dean', faveColor: '#bf00ff', strength: 80 } },
      { data: { source: 'Jacqueline', target: 'Mandeval', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Pitta', faveColor: '#bf00ff', strength: 80 } },
      { data: { source: 'Jacqueline', target: 'Reynolds', faveColor: '#bf00ff', strength: 30} },
      { data: { source: 'Jacqueline', target: 'Weiser', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Alicia', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Julia', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Margit', faveColor: '#bf00ff', strength: 130 } }
    
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

}); // on dom ready