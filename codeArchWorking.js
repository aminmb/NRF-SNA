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
      { data: { id: 'Berg', name: '1', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Bodine', name: '2', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Bristol', name: '3', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Bruneau', name: '4', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Chambers', name: '5', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Chen', name: '6', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Dummann', name: '7', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Holm', name: '8', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Jawish', name: '9', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Kelley', name: '11', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Kendall', name: '12', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Osiecki', name: '15', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Pieper', name: '16', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Ravinet', name: '17', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Rein', name: '18', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Ross', name: '19', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Sabin', name: '20', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Sluz', name: '21', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Twitchell', name: '23', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'VanderBilt', name: '24', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Voorhees', name: '25', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Werner', name: '26', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Wilson', name: '27', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
	  { data: { id: 'Wooten', name: '28', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      { data: { id: 'Wright', name: '29', weight: 45, faveColor: '#6FB1FC', faveShape: 'ellipse' } },
      
      
      { data: { id: 'Tilson', name: '30', weight: 45, faveColor: '#000000', faveShape: 'ellipse' } },
      { data: { id: 'McMurren', name: '31', weight: 45, faveColor: '#000000', faveShape: 'ellipse' } },
      { data: { id: 'Nygren', name: '32', weight: 45, faveColor: '#000000', faveShape: 'ellipse' } },
      { data: { id: 'Kahler', name: '33', weight: 45, faveColor: '#000000', faveShape: 'ellipse' } }
 	],
    
    edges: [

      { data: { source: 'Tilson', target: 'Berg', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Bodine', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Bristol', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Bruneau', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Chambers', faveColor: '#86B342', strength: 30} },
      { data: { source: 'Tilson', target: 'Chen', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Dummann', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Gardner', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Holm', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Tilson', target: 'Jawish', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Kahler', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Kelley', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Kendall', faveColor: '#86B342', strength: 80} },
      { data: { source: 'Tilson', target: 'McMurren', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Tilson', target: 'Nygren', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Osiecki', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Pieper', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Ravinet', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Tilson', target: 'Rein', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Ross', faveColor: '#86B342', strength: 30} },
      { data: { source: 'Tilson', target: 'Sabin', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Sluz', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Twitchell', faveColor: '#86B342', strength: 130 } },
      { data: { source: 'Tilson', target: 'VanderBilt', faveColor: '#86B342', strength: 80 } },
      { data: { source: 'Tilson', target: 'Voorhees', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Wagner', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Werner', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Wilson', faveColor: '#86B342', strength: 130} },
      { data: { source: 'Tilson', target: 'Wooten', faveColor: '#86B342', strength: 30 } },
      { data: { source: 'Tilson', target: 'Wright', faveColor: '#86B342', strength: 80 } },
     
      
      { data: { source: 'McMurren', target: 'Kahler', faveColor: '#bf00ff', strength: 30 } },
      { data: { source: 'McMurren', target: 'Nygren', faveColor: '#bf00ff', strength: 30 } },
      { data: { source: 'McMurren', target: 'Tilson', faveColor: '#bf00ff', strength: 130 } },
     

      { data: { source: 'Nygren', target: 'Berg', faveColor: '#ff0000', strength: 130 } },
      { data: { source: 'Nygren', target: 'Chen', faveColor: '#ff0000', strength: 130 } },
      { data: { source: 'Nygren', target: 'Kelley', faveColor: '#ff0000', strength: 80} },
      { data: { source: 'Nygren', target: 'McMurren', faveColor: '#ff0000', strength: 130 } },
      { data: { source: 'Nygren', target: 'Osiecki', faveColor: '#ff0000', strength: 130 } },
      { data: { source: 'Nygren', target: 'Sluz', faveColor: '#ff0000', strength: 130 } },
      { data: { source: 'Nygren', target: 'Woote', faveColor: '#ff0000', strength: 330 } },
      
      
      { data: { source: 'Kahler', target: 'Berg', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Bodine', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Bristol', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Bruneau', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Chambers', faveColor: '#000099', strength: 130} },
      { data: { source: 'Kahler', target: 'Chen', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Dummann', faveColor: '#000099', strength: 30 } },
      { data: { source: 'Kahler', target: 'Gardner', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Holm', faveColor: '#000099', strength: 30 } },
      { data: { source: 'Kahler', target: 'Jawish', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Kelley', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Kendall', faveColor: '#000099', strength: 130} },
      { data: { source: 'Kahler', target: 'McMurren', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Nygren', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Osiecki', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Pieper', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Ravinet', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Rein', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Ross', faveColor: '#000099', strength: 130} },
      { data: { source: 'Kahler', target: 'Sabin', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Sluz', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Tilson', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Twitchell', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'VanderBilt', faveColor: '#000099', strength: 80 } },
      { data: { source: 'Kahler', target: 'Voorhees', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Wagner', faveColor: '#000099', strength: 130} },
      { data: { source: 'Kahler', target: 'Werner', faveColor: '#000099', strength: 30} },
      { data: { source: 'Kahler', target: 'Wilson', faveColor: '#000099', strength: 80} },
      { data: { source: 'Kahler', target: 'Wooten', faveColor: '#000099', strength: 130 } },
      { data: { source: 'Kahler', target: 'Wright', faveColor: '#000099', strength: 130 } }
     
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

}); // on dom ready