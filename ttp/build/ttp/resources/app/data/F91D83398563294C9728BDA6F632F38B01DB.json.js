GS.dataCache['F91D83398563294C9728BDA6F632F38B01DB'] = {
    "uid": "F91D83398563294C9728BDA6F632F38B01DB",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Kill Slider Calls",
        "type": "data_record",
        "order": 9,
        "category": "commonEvents",
        "isFolder": false,
        "data": {
            "name": "Kill Slider Calls",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "// Clear up parallel calls\nvar ce = SceneManager.scene.commonEventContainer.subObjects.first(function(f){ return f && f.rid == \"C32487F42E31464625691786E4D7DC60F21C\";});\nif(ce && ce.components.length > 1) { ce.components.splice(1, ce.components.length - 1) }"
                    },
                    "indent": 0,
                    "uid": "484C46633CD7D246D91AD526FB2A55D57681",
                    "expanded": true
                }
            ],
            "index": "F91D83398563294C9728BDA6F632F38B01DB",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "id": "F91D83398563294C9728BDA6F632F38B01DB",
        "localizableStrings": {},
        "parentId": "5A8B29D301CE814E2E2BF6930C0DC05DD96F"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}