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
      { data: { id: 'Asselin', name: '1', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Dikson', name: '2', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Hage', name: '3', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'James', name: '4', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Lush', name: '5', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Saxton', name: '6', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Scholl', name: '7', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Shemet', name: '8', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Young', name: '9', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      
      { data: { id: 'Jacqueline', name: '10', weight: 45, faveColor: '#EDA1ED', faveShape: 'ellipse' } },
      { data: { id: 'Jeanne', name: '11', weight: 45, faveColor: '#EDA1ED', faveShape: 'ellipse' } }
 	],
    
    edges: [
      { data: { source: 'Jeanne', target: 'Dikson', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Jeanne', target: 'Hage', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Jeanne', target: 'James', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Jeanne', target: 'Lush', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Jeanne', target: 'Scholl', faveColor: '#86B342', strength: 80} },
      { data: { source: 'Jeanne', target: 'Shemet', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Jeanne', target: 'Young', faveColor: '#86B342', strength: 130 } },
     
      { data: { source: 'Jacqueline', target: 'Asselin', faveColor: '#bf00ff', strength: 30 } },
      { data: { source: 'Jacqueline', target: 'Dikson', faveColor: '#bf00ff', strength: 80 } },
      { data: { source: 'Jacqueline', target: 'Hage', faveColor: '#bf00ff', strength: 80 } },
      { data: { source: 'Jacqueline', target: 'James', faveColor: '#bf00ff', strength: 80 } },
      { data: { source: 'Jacqueline', target: 'Lush', faveColor: '#bf00ff', strength: 80} },
      { data: { source: 'Jacqueline', target: 'Saxton', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Scholl', faveColor: '#bf00ff', strength: 80 } },
      { data: { source: 'Jacqueline', target: 'Shemet', faveColor: '#bf00ff', strength: 130 } },
      { data: { source: 'Jacqueline', target: 'Young', faveColor: '#bf00ff', strength: 80 } }
    
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

}); // on dom ready