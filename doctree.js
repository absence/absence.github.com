	
	var DELIMITER = '/';
	var nameCategoryMap = {};
	for ( var section in list ) {
		var id = section.toString().substr(0,1);
		html += '<h2 id="h' + id + '" onclick="toggleSection(' + id + ')" >-  ' + section + '</h2>';
		html += '<ul id="c' + id + '">';
		for ( var category in list[ section ] ) {
			html += '<h3>' + category + '</h3>';
			html += '<ul  id="u' + id + '" >';
			for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {
				var page = list[ section ][ category ][ i ];
				html += '<li><a href="javascript:goTo(\'' + section + '\', \'' + category + '\', \'' + page[ 0 ] + '\')">' + page[ 0 ];
				if (page[2]) {
					html += '<br><img alt="' + page[2] + '" title="' + page[2] + '" src="' + page[1] + '.jpg"></a></li>';
				} else {
					html += '</a></li>';
				}
				nameCategoryMap[page[0]] = {
					section: section,
					category: category,
					name: page[0]
				};
			}
			html += '</ul>';
		}
		html += '</ul>';	
	}
	panel.innerHTML += html;
	
	// toggleMenu( 1 );
	// toggleSection( 2 );
	// toggleSection( 3 );
	
	function encodeUrl( path ) {
		return path.replace(/\ \/\ /g, '.').replace(/\ /g, '_');
	}

	function decodeUrl( path ) {
		return path.replace(/_/g, ' ').replace(/\./g, ' / ');
	}

	// Page loading
	function goTo( section, category, name ) {
		// Fully resolve links that only provide a name
		if(arguments.length == 1) {
			var location = nameCategoryMap[section];
			section = location.section;
			category = location.category;
			name = location.name;
		}
		//var title = 'three.js - documentation - ' + section + ' - ' + category + ' - ' + name;
		// var title = category + '-' + name;
		var title = name + '-' + category + '-' + section + '-' + appName;
		var url = encodeUrl(section) + DELIMITER + encodeUrl( category ) + DELIMITER + encodeUrl(name);

		window.location.hash = url;
		window.document.title = title;

		viewer.src = pages[ section ][ category ][ name ] + '.html';
	}

	function goToHash() {
		var hash = window.location.hash.substring( 1 ).split(DELIMITER);
		goTo( decodeUrl(hash[0]), decodeUrl(hash[1]), decodeUrl(hash[2]) );
	}

	window.addEventListener( 'hashchange', goToHash, false );

	if ( window.location.hash.length > 0 ) goToHash();

	function toggleSection(id ) {
		var cat = document.getElementById('c' + id);
		var hdr = document.getElementById('h' + id);	
		if ( cat.style.display == '' || cat.style.display == 'block' ) {
			cat.style.display = 'none';	
			hdr.innerHTML = '[+] ' + hdr.innerHTML.substr(3);
		} else {
			cat.style.display = 'block';
			hdr.innerHTML = '[-] ' + hdr.innerHTML.substr(3);
		}	
	}