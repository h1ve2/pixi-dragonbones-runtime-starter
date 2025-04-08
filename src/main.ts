import {Application, Assets} from 'pixi.js';
import {PixiFactory} from "pixi-dragonbones-runtime";
import manifest from "./manifest.json";

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({
        background: '#eee',
        width: 512,
        height: 512,
    });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);
    await Assets.init({
        manifest: manifest,
        basePath: './assets/'
    });

    // load assets
    await Assets.loadBundle('preload');

    const factory = PixiFactory.factory;

    // asset alias or JSON Object
    factory.parseDragonBonesData("preload/starter_ske.json");
    factory.parseTextureAtlasData("preload/starter_tex.json",
        "preload/starter_tex.png");

    const armatureDisplay = factory.buildArmatureDisplay("starter");

    armatureDisplay.position.set(300, 420);

    app.stage.addChild(armatureDisplay);

    armatureDisplay.animation.play("throw", -1);

})();
