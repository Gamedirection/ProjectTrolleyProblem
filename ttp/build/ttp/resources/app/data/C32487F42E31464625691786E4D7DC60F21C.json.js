GS.dataCache['C32487F42E31464625691786E4D7DC60F21C'] = {
    "uid": "C32487F42E31464625691786E4D7DC60F21C",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Create H-Bar LTR",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "isFolder": false,
        "data": {
            "name": "Create H-Bar LTR",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": false,
            "inline": false,
            "parameters": [
                {
                    "label": "Number",
                    "type": 1,
                    "numberVariable": {
                        "name": "Pic ID",
                        "index": 5,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "X",
                    "type": 1,
                    "numberVariable": {
                        "name": "Pos X",
                        "index": 6,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Y",
                    "type": 1,
                    "numberVariable": {
                        "name": "Pos Y",
                        "index": 7,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Max.",
                    "type": 1,
                    "numberVariable": {
                        "name": "Max.",
                        "index": 9,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                },
                {
                    "label": "Store in",
                    "type": 1,
                    "numberVariable": {
                        "name": "Store",
                        "index": 10,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": {
                            "name": "Pic ID",
                            "index": 5,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "shape": "rect",
                        "positionType": 1,
                        "actions": {
                            "onClick": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "change_bar",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onEnter": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onSelect": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDeselect": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onLeave": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDrag": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "change_bar",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDrop": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDropReceive": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 1,
                            "variable": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 0,
                            "vertical": 0,
                            "rect": {
                                "x": 100,
                                "y": 100,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 50,
                                    "y": 50,
                                    "width": 280,
                                    "height": 16,
                                    "horizontalFlip": false,
                                    "zoom": 1,
                                    "angle": 0
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 280,
                                    "height": 16
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": {
                                "name": "Pos X",
                                "index": 6,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "y": {
                                "name": "Pos Y",
                                "index": 7,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 913,
                                "y": 431,
                                "width": 98,
                                "height": 220,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 450,
                                "height": 25
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "baseGraphic": null
                    },
                    "indent": 0,
                    "uid": "9BEF06A6848E0448403BF5C642B74AF82C5C",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Fill Pic ID",
                            "index": 8,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Pic ID",
                            "index": 5,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "30EFC7772E17024D09385960AF57E46F30FE"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Fill Pic ID",
                            "index": 8,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": 1,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "9D83A7826CD768464D79B291225F5213B06D"
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 8,
                        "number": {
                            "name": "Fill Pic ID",
                            "index": 8,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "blendMode": 0,
                        "zOrder": 0,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 1,
                        "positionType": 2,
                        "position": {
                            "x": {
                                "name": "Pos X",
                                "index": 6,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "y": {
                                "name": "Pos Y",
                                "index": 7,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "origin": 0,
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 1,
                            "zOrder": 1,
                            "blendMode": 1,
                            "visual.type": 1,
                            "visual.frame.thickness": 1,
                            "visual.frame.cornerSize": 1,
                            "visual.threePartImage.orientation": 1,
                            "visual.quad.color": 1,
                            "size.type": 1,
                            "size.width": 1,
                            "size.height": 1,
                            "viewport.type": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "slider_hover.png",
                            "folderPath": "Graphics/Pictures/In-Game UI",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        }
                    },
                    "indent": 0,
                    "uid": "13F7A11C0AD8C148261BB73835A48CDB2F44",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "X",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Pos X",
                            "index": 6,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "34FA65251B69B147C21B98A9668388A46601"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Temp",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Max.",
                            "index": 9,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 1,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "4A3C21A812BAB44E3D7A8547365F1DBD7326"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Temp",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 2,
                        "sourceValue": {
                            "name": "Pos Y",
                            "index": 7,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 1,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "4FAD596E98136241042803151DEAF45F6CE6"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 418,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 1,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C1F849094988E04D4218A823138065EF738C"
                },
                {
                    "id": "gs.ChangeDecimalVariables",
                    "params": {
                        "roundMethod": 0,
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 4,
                        "source": 0,
                        "sourceValue": {
                            "name": "Max.",
                            "index": 9,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 1,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "6FA435F8117CE048892A22288E23A7774B8F"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": {
                            "name": "Temp",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 1,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "F6E86A5B21186448205BA1C694B2A79A6562"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 1,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B0BDC9135395D64D465B5C646C693B6E7541"
                },
                {
                    "id": "gs.JumpToLabel",
                    "params": {
                        "name": "init",
                        "target": "activeContext"
                    },
                    "indent": 0,
                    "uid": "7B1AD7B2004913482E4A800081008D3C7988"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "5DE7BD445366634CDB3B90921214222BAB89"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "change_bar"
                    },
                    "indent": 0,
                    "uid": "EFBBAEC93BA67447991A1BD6FAC2A49B9D51"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 8,
                        "state": 0,
                        "targetVariable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "9F39EE4B5F2E88494F89A1957678957FBBEC"
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "init"
                    },
                    "indent": 0,
                    "uid": "F67EED015DE364410A1B4C76694B00E39AC3"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Global X",
                            "index": 4,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "98EF52D187979747F429EEF5F274520E8F49"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Pic W",
                            "index": 3,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 418,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C9FB145B7BFFB3433888AE64B31D53C18302"
                },
                {
                    "id": "vn.GetObjectData",
                    "params": {
                        "objectType": 7,
                        "number": {
                            "name": "Pic ID",
                            "index": 5,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 1,
                        "targetVariable": {
                            "name": "Pic X",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "64AB4E647C46C049BA4B1B11903D070AB080"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 2,
                        "source": 0,
                        "sourceValue": {
                            "name": "Pic Y",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "8F94D9FB116AD84A5F99EE796ED0FD2C44EB"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "93890B6956C4B4407A6B4AE1D3CB87E95812"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "EFB3CFC237B7E04F7F2932055393D0E70528"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Global Y",
                            "index": 4,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Pic Y",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "EC61C2A02F1DF64BDC5B5213853D8A395609"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 418,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B4C4ECFE1244A74B2C8A9737F81F54D910CC"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 418,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "40821FED874FE04B9E7AAA07C7E0FE3A8CBB"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Global Y",
                            "index": 4,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 2,
                        "source": 0,
                        "sourceValue": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "B7CA06305CBE84412C2A37B9EEE66FF709F5"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 418,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "A13A3CBC0C95B149EB48BA25D75179C37328"
                },
                {
                    "id": "gs.CropPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": {
                            "name": "Fill Pic ID",
                            "index": 8,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "x": 0,
                        "y": 0,
                        "width": {
                            "name": "X",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "height": 23
                    },
                    "indent": 0,
                    "uid": "F8394FD04FD2E0446C48D0F2CE9E3437B7DF"
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "SceneManager.scene.pictures[GameManager.variableStore.tempNumbers[8]].update()"
                    },
                    "indent": 0,
                    "uid": "A18292D312E4F2428F1974E85C6960C454A9",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "Max.",
                            "index": 9,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "106183213BB46146312BCF27CD714C135D9B"
                },
                {
                    "id": "gs.ChangeDecimalVariables",
                    "params": {
                        "roundMethod": 0,
                        "target": 0,
                        "targetVariable": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 4,
                        "source": 0,
                        "sourceValue": 418,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "5146E9055798D04E842A57A13B6725AC55FC"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "X",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 3,
                        "source": 0,
                        "sourceValue": {
                            "name": "Value",
                            "index": 11,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "50FE69CF5541744B0C2BEC533D9A597511DA"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 2,
                        "targetVariable": {
                            "name": "Pic H",
                            "index": 3,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 1,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "name": "Store",
                            "index": 10,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "X",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B1FEFDA08D99E1486F9AFB741496F03E10C2"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Update Music, Voice and Sound volume on any slider change to preview an instant change of the volume."
                    },
                    "indent": 0,
                    "uid": "9BA2BF552F0281494849F507C3B8283F6ACA",
                    "expanded": true
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
                    "uid": "5BC43A468B5EE84DF68B9473776AFAE2546D"
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
                    "uid": "90A8A18494DAC64D5508D6E2831699324A4C"
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
                    "uid": "785AE7AB8230B64A6E4A9776D76899264FAF"
                },
                {
                    "id": "gs.Idle",
                    "params": {},
                    "indent": 0,
                    "uid": "B72CE37C58C6044748298069A71B746A3399"
                }
            ],
            "index": "C32487F42E31464625691786E4D7DC60F21C",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Temp",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "X",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Pic X",
                    "index": 2,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Pic W",
                    "index": 3,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Global X",
                    "index": 4,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Pic ID",
                    "index": 5,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Pos X",
                    "index": 6,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Pos Y",
                    "index": 7,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Fill Pic ID",
                    "index": 8,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Max.",
                    "index": 9,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Store",
                    "index": 10,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Value",
                    "index": 11,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "stringVariables": [
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
        "id": "C32487F42E31464625691786E4D7DC60F21C",
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