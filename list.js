var list = {
	'Summary': {
		'Overview': [
			[ 'Home Page','1-overview/overview/1Home-Page' ],
			[ 'Book Summary','1-overview/overview/2Book-Summary' ],
			[ 'Absence Code Demo','1-overview/overview/3Absence-Code-Demo' ],
			[ 'Credits','1-overview/overview/4Credits' ],
			[ 'License','1-overview/overview/5License' ]
		],
		'Part 1 ~ Outlining the Problem': [
			[ 'Read Me','2-summary/1part/000readme' ],
			[ 'Part 1 Summary','2-summary/1part/000part1' ],
			[ 'Chapter 0 ~ Absence','2-summary/1part/00absence' ],
			[ 'Chapter 1 ~ (W)holes','2-summary/1part/01w-holes' ],
			[ 'Chapter 2 ~ Homunculi','2-summary/1part/02homunculi' ],
			[ 'Chapter 3 ~ Golems','2-summary/1part/03golems' ],
			[ 'Chapter 4 ~ Teleonomy','2-summary/1part/04teleonomy' ],
			[ 'Chapter 5 ~ Emergence','2-summary/1part/05emergence' ],
		],
		'Part 2 ~ Outlining an Alternative Theory': [ 
			[ 'Part 2 Summary','2-summary/2part/00part2' ],
			[ 'Chapter 6 ~ Constraint','2-summary/2part/06constraint' ],
			[ 'Chapter 7 ~ Homeodynamics','2-summary/2part/07homeodynamics' ],
			[ 'Chapter 8 ~ Morphodynamics','2-summary/2part/08morphodynamics' ],
			[ 'Chapter 9 ~ Teleodynamics','2-summary/2part/09teleodynamics' ],
			[ 'Chapter 10 ~ Autogenesis','2-summary/2part/10autogenesis' ],
		],
		'Part 3 ~ Exploring the Implications': [       
			[ 'Part 3 Summary','2-summary/3part/00part3' ],
			[ 'Chapter 11 ~ Work','2-summary/3part/11work' ],
			[ 'Chapter 12 ~ Information','2-summary/3part/12information' ],
			[ 'Chapter 13 ~ Significance','2-summary/3part/13significance' ],
			[ 'Chapter 14 ~ Evolution','2-summary/3part/14evolution' ],
			[ 'Chapter 15 ~ Self','2-summary/3part/15self' ],
			[ 'Chapter 16 ~ Sentience','2-summary/3part/16sentience' ],
			[ 'Chapter 17 ~ Consciousness','2-summary/3part/17consciousness' ],
			[ 'Epilogue','2-summary/3part/18epilogue' ]
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
