var list = {
	'Help': {
    'Overview': [
      [ 'Overview','1-overview/overview/overview' ],
      [ 'Absence Code Demo','1-overview/code-demo/Absence-Code-Demo' ],
      [ 'Colophon','1-overview/colophon/Colophon' ]
    ],
		'Summary': [
      [ 'Read Me','2-summary/000-readme/readme' ],
			[ 'Chapter 0 ~ Absence','2-summary/00-absence/absence' ],
			[ 'Chapter 1 ~ (W)holes','2-summary/01-w-holes/w-holes' ],
			[ 'Chapter 2 ~ Homunculi','2-summary/02-homunculi/homunculi' ],
      [ 'Chapter 3 ~ Golems','2-summary/03-golems/golems' ],
      [ 'Chapter 4 ~ Teleonomy','2-summary/04-teleonomy/teleonomy' ],
      [ 'Chapter 5 ~ Emergence','2-summary/05-emergence/emergence' ],
      [ 'Chapter 6 ~ Constraint','2-summary/06-constraint/constraint' ],
      [ 'Chapter 7 ~ Homeodynamics','2-summary/07-homeodynamics/homeodynamics' ],
      [ 'Chapter 8 ~ Morphodynamics','2-summary/08-morphodynamics/morphodynamics' ],
      [ 'Chapter 9 ~ Teleodynamics','2-summary/09-teleodynamics/teleodynamics' ],
      [ 'Chapter 10 ~ Autogenesis','2-summary/10-autogenesis/autogenesis' ],
      [ 'Chapter 11 ~ Work','2-summary/11-work/work' ],
      [ 'Chapter 12 ~ Information','2-summary/12-information/information' ],
      [ 'Chapter 13 ~ Significance','2-summary/13-significance/significance' ],
      [ 'Chapter 14 ~ Evolution','2-summary/14-evolution/evolution' ],
      [ 'Chapter 15 ~ Self','2-summary/15-self/self' ],
      [ 'Chapter 16 ~ Sentience','2-summary/16-sentience/sentience' ],
      [ 'Chapter 17 ~ Consciousness','2-summary/17-consciousness/consciousness' ],
      [ 'Epilogue','2-summary/18-epilogue/epilogue' ]
      
		],
    'Explanations': [
      ['Read Me', '3-explanations/0-readme/Read-Me'],
      ['Absential', '3-explanations/absential/absential'],
      ['Autogen', '3-explanations/autogen/autogen'],
      ['Constraints', '3-explanations/constraints/constraints'],
      ['Emergence', '3-explanations/emergence/emergence'],
      ['Ententional', '3-explanations/ententional/ententional'],
      ['Homeodynamics', '3-explanations/homeodynamics/homeodynamics'],
      ['Morphodynamics', '3-explanations/morphodynamics/morphodynamics'],
      ['Self', '3-explanations/self/self'],
      ['Teleodynamics', '3-explanations/teleodynamics/teleodynamics']
    ]
  }
};

var pages = {};

for ( var section in list ) {

	pages[ section ] = {};

	for ( var category in list[ section ] ) {

		pages[ section ][ category ] = {};

		for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {

			var page = list[ section ][ category ][ i ];
			pages[ section ][ category ][ page[ 0 ] ] = page[ 1 ];

		}

	}
}
