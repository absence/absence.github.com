var list = {
	'Incomplete Nature': {
    'Overview': [
      [ 'Overview','1-overview/overview/overview' ]
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
      ['Read Me', '3-explanations/0-readme/readme'],
      ['Absential', '3-explanations/absential/absential'],
      ['Autogen', '3-explanations/autogen/autogen'],
      ['Constraints', '3-explanations/constraints/constraints'],
      ['Emergence', '3-explanations/emergence/emergence'],
      ['Ententional', '3-explanations/ententional/ententional'],
      ['Homeodynamics', '3-explanations/homeodynamics/homeodynamics'],
      ['Morphodynamics', '3-explanations/morphodynamics/morphodynamics'],
      ['Self', '3-explanations/self/self'],
      ['Teleodynamics', '3-explanations/teleodynamics/teleodynamics'],
    ]
  }
/*
	"Manual": {
		"Introduction": [
			[ "Creating a scene", "manual/introduction/Creating-a-scene" ]
		]
	},

	"Reference": {
		"Cameras": [
			[ "Camera", "api/cameras/Camera" ],
			[ "OrthographicCamera", "api/cameras/OrthographicCamera" ],
			[ "PerspectiveCamera", "api/cameras/PerspectiveCamera" ]
		],

		"Core": [
			[ "Clock", "api/core/Clock" ],
			[ "Color", "api/core/Color" ],
			[ "Face3", "api/core/Face3" ],
			[ "Face4", "api/core/Face4" ],
			[ "Frustum", "api/core/Frustum" ],
			[ "Geometry", "api/core/Geometry" ],
			[ "Math", "api/core/Math" ],
			[ "Matrix3", "api/core/Matrix3" ],
			[ "Matrix4", "api/core/Matrix4" ],
			[ "Object3D", "api/core/Object3D" ],
			[ "Projector", "api/core/Projector" ],
			[ "Quaternion", "api/core/Quaternion" ],
			[ "Ray", "api/core/Ray" ],
			[ "Rectangle", "api/core/Rectangle" ],
			[ "Spline", "api/core/Spline" ],
			[ "UV", "api/core/UV" ],
			[ "Vector2", "api/core/Vector2" ],
			[ "Vector3", "api/core/Vector3" ],
			[ "Vector4", "api/core/Vector4" ]
		],

		"Lights": [
			[ "Light", "api/lights/Light" ],
			[ "AmbientLight", "api/lights/AmbientLight" ],
			[ "DirectionalLight", "api/lights/DirectionalLight" ],
			[ "PointLight", "api/lights/PointLight" ],
			[ "SpotLight", "api/lights/SpotLight" ]
		],


		"Loaders": [
			[ "Loader", "api/loaders/Loader" ],
			[ "BinaryLoader", "api/loaders/BinaryLoader" ],
			[ "GeometryLoader", "api/loaders/GeometryLoader" ],
			[ "ImageLoader", "api/loaders/ImageLoader" ],
			[ "JSONLoader", "api/loaders/JSONLoader" ],
			[ "LoadingMonitor", "api/loaders/LoadingMonitor" ],
			[ "SceneLoader", "api/loaders/SceneLoader" ],
			[ "TextureLoader", "api/loaders/TextureLoader" ],
		],

		"Materials": [
			[ "Material", "api/materials/Material" ],
			[ "LineBasicMaterial", "api/materials/LineBasicMaterial" ],
			[ "MeshBasicMaterial", "api/materials/MeshBasicMaterial" ],
			[ "MeshDepthMaterial", "api/materials/MeshDepthMaterial" ],
			[ "MeshFaceMaterial", "api/materials/MeshFaceMaterial" ],
			[ "MeshLambertMaterial", "api/materials/MeshLambertMaterial" ],
			[ "MeshNormalMaterial", "api/materials/MeshNormalMaterial" ],
			[ "MeshPhongMaterial", "api/materials/MeshPhongMaterial" ],
			[ "ParticleBasicMaterial", "api/materials/ParticleBasicMaterial" ],
			[ "ParticleCanvasMaterial", "api/materials/ParticleCanvasMaterial" ],
			[ "ParticleDOMMaterial", "api/materials/ParticleDOMMaterial" ],
			[ "ShaderMaterial", "api/materials/ShaderMaterial" ]

		],

		"Objects": [
			[ "Bone", "api/objects/Bone" ],
			[ "Line", "api/objects/Line" ],
			[ "LOD", "api/objects/LOD" ],
			[ "Mesh", "api/objects/Mesh" ],
			[ "MorphAnimMesh", "api/objects/MorphAnimMesh" ],
			[ "Particle", "api/objects/Particle" ],
			[ "ParticleSystem", "api/objects/ParticleSystem" ],
			[ "Ribbon", "api/objects/Ribbon" ],
			[ "SkinnedMesh", "api/objects/SkinnedMesh" ],
			[ "Sprite", "api/objects/Sprite" ]

		],

		"Renderers": [
			[ "CanvasRenderer", "api/renderers/CanvasRenderer" ],
			[ "DOMRenderer", "api/renderers/DOMRenderer" ],
			[ "SVGRenderer", "api/renderers/SVGRenderer" ],
			[ "WebGLRenderer", "api/renderers/WebGLRenderer" ],
			[ "WebGLRenderTarget", "api/renderers/WebGLRenderTarget" ],
			[ "WebGLRenderTargetCube", "api/renderers/WebGLRenderTargetCube" ],
			[ "WebGLShaders", "api/renderers/WebGLShaders" ]
		],

		"Renderers / Renderables": [
			[ "RenderableFace3", "api/renderers/renderables/RenderableFace3" ],
			[ "RenderableFace4", "api/renderers/renderables/RenderableFace4" ],
			[ "RenderableLine", "api/renderers/renderables/RenderableLine" ],
			[ "RenderableObject", "api/renderers/renderables/RenderableObject" ],
			[ "RenderableParticle", "api/renderers/renderables/RenderableParticle" ],
			[ "RenderableVertex", "api/renderers/renderables/RenderableVertex" ]
		],

		"Scenes": [
			[ "Fog", "api/scenes/Fog" ],
			[ "FogExp2", "api/scenes/FogExp2" ],
			[ "Scene", "api/scenes/Scene" ]
		],

		"Textures": [
			[ "DataTexture", "api/textures/DataTexture" ],
			[ "Texture", "api/textures/Texture" ]
		],

		"Extras": [
			[ "ColorUtils", "api/extras/ColorUtils" ],
			[ "GeometryUtils", "api/extras/GeometryUtils" ],
			[ "ImageUtils", "api/extras/ImageUtils" ],
			[ "SceneUtils", "api/extras/SceneUtils" ],
			[ "ShaderUtils", "api/extras/ShaderUtils" ]
		],

		"Extras / Animation": [
			[ "Animation", "api/extras/animation/Animation" ],
			[ "AnimationHandler", "api/extras/animation/AnimationHandler" ],
			[ "AnimationMorphTarget", "api/extras/animation/AnimationMorphTarget" ],
			[ "KeyFrameAnimation", "api/extras/animation/KeyFrameAnimation" ]
		],

		"Extras / Cameras": [
			[ "CombinedCamera", "api/extras/cameras/CombinedCamera" ],
			[ "CubeCamera", "api/extras/cameras/CubeCamera" ]
		],

		"Extras / Controls": [
			[ "FirstPersonControls", "api/extras/controls/FirstPersonControls" ],
			[ "FlyControls", "api/extras/controls/FlyControls" ],
			[ "PathControls", "api/extras/controls/PathControls" ],
			[ "RollControls", "api/extras/controls/RollControls" ],
			[ "TrackballControls", "api/extras/controls/TrackballControls" ]
		],

		"Extras / Core": [
			[ "BufferGeometry", "api/extras/core/BufferGeometry" ],
			[ "Curve", "api/extras/core/Curve" ],
			[ "CurvePath", "api/extras/core/CurvePath" ],
			[ "EventTarget", "api/extras/core/EventTarget" ],
			[ "Gyroscope", "api/extras/core/Gyroscope" ],
			[ "Path", "api/extras/core/Path" ],
			[ "Shape", "api/extras/core/Shape" ],
			[ "TextPath", "api/extras/core/TextPath" ]
		],

		"Extras / Geometries": [
			[ "CubeGeometry", "api/extras/geometries/CubeGeometry" ],
			[ "CylinderGeometry", "api/extras/geometries/CylinderGeometry" ],
			[ "ExtrudeGeometry", "api/extras/geometries/ExtrudeGeometry" ],
			[ "IcosahedronGeometry", "api/extras/geometries/IcosahedronGeometry" ],
			[ "LatheGeometry", "api/extras/geometries/LatheGeometry" ],
			[ "OctahedronGeometry", "api/extras/geometries/OctahedronGeometry" ],
			[ "PlaneGeometry", "api/extras/geometries/PlaneGeometry" ],
			[ "PolyhedronGeometry", "api/extras/geometries/PolyhedronGeometry" ],
			[ "SphereGeometry", "api/extras/geometries/SphereGeometry" ],
			[ "TetrahedronGeometry", "api/extras/geometries/TetrahedronGeometry" ],
			[ "TextGeometry", "api/extras/geometries/TextGeometry" ],
			[ "TorusGeometry", "api/extras/geometries/TorusGeometry" ],
			[ "TorusKnotGeometry", "api/extras/geometries/TorusKnotGeometry" ]
		],

		"Extras / Helpers": [
			[ "AxisHelper", "api/extras/helpers/AxisHelper" ],
			[ "CameraHelper", "api/extras/helpers/CameraHelper" ]
		],

		"Extras / Modifiers": [
			[ "SubdivisionModifier", "api/extras/modifiers/SubdivisionModifier" ]
		],

		"Extras / Objects": [
			[ "LensFlare", "api/extras/objects/LensFlare" ]
		],

		"Extras / Renderers / Effects": [
			[ "AnaglyphEffect", "api/extras/renderers/effects/AnaglyphEffect" ],
			[ "CrosseyedEffect", "api/extras/renderers/effects/CrosseyedEffect" ],
			[ "ParallaxBarrierEffect", "api/extras/renderers/effects/ParallaxBarrierEffect" ],
			[ "StereoEffect", "api/extras/renderers/effects/StereoEffect" ]
		],

		"Extras / Renderers / Plugins": [
			[ "LensFlarePlugin", "api/extras/renderers/plugins/LensFlarePlugin" ],
			[ "ShadowMapPlugin", "api/extras/renderers/plugins/ShadowMapPlugin" ],
			[ "SpritePlugin", "api/extras/renderers/plugins/SpritePlugin" ]
		],

		"Extras / Shaders": [
			[ "ShaderFlares", "api/extras/shaders/ShaderFlares" ],
			[ "ShaderSprite", "api/extras/shaders/ShaderSprite" ]
		]
	}
*/
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
