GS.dataCache['FDE10D61363F62471D2990437FBB8C1DBA5B'] = {
    "uid": "FDE10D61363F62471D2990437FBB8C1DBA5B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Back to Title",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "FDE10D61363F62471D2990437FBB8C1DBA5B",
        "isFolder": false,
        "parentId": "677243CC39A690411E097A987D96083D4045",
        "data": {
            "name": "Back to Title",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event brings the user back to the title screen."
                    },
                    "indent": 0,
                    "expanded": true,
                    "uid": "7CD20B1115D1144A703868C79E286CE7BDFC"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "933D31DA130C04457F1B6C15E70921561E93"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0
                    },
                    "indent": 0,
                    "uid": "68D2971438392340B76B7FB0C999689890AA"
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 2,
                        "numberValue": {
                            "name": "Music Volume",
                            "index": 4,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "decimalValue": {
                            "name": "Text Speed",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "414F3EB14A79864CF0299C8595612EB08FAC"
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 4,
                        "numberValue": {
                            "name": "Auto Speed",
                            "index": 3,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "decimalValue": {
                            "name": "Auto Duration",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "6C0EDC618D18A74F0C2B7F0899DD796F0622"
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 14,
                        "numberValue": {
                            "name": "Music Volume",
                            "index": 4,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "decimalValue": {
                            "name": "Auto Duration",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "4504567C64EAA84CC71A22C54FA3BE5C45E6"
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 16,
                        "numberValue": {
                            "name": "Sound Volume",
                            "index": 5,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "decimalValue": {
                            "name": "Auto Duration",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "0FC589C22348484067589EE3C5E6CE5C0724"
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 15,
                        "numberValue": {
                            "name": "Voice Volume",
                            "index": 6,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "decimalValue": {
                            "name": "Auto Duration",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "49B601D98F1539414998CA53E48D3AE9E65A"
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "F91D83398563294C9728BDA6F632F38B01DB",
                        "parameters": {
                            "values": []
                        }
                    },
                    "indent": 0,
                    "uid": "F93A31D413FDC8439A284E8889EEB93694BB"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
                            "name": "Title Screen"
                        },
                        "savePrevious": 0,
                        "duration": 20,
                        "erasePictures": 1,
                        "eraseTexts": 1,
                        "eraseVideos": 1,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "expanded": false,
                    "uid": "1C2C62C25336A349371B1FD841DEFD0CC22B"
                }
            ],
            "index": "FDE10D61363F62471D2990437FBB8C1DBA5B",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86",
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}