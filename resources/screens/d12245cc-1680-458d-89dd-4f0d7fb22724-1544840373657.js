jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-limit_order","#s-limit" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stop","#s-stop_order" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-market","#s-market_order" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stop","#s-stop_order" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-limit_order","#s-limit" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-market","#s-market_order" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-submit_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_16",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_17",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-limit_full_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_16",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_17",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-limit_sl_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_15",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_16",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_17",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-limit_empty_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_16",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_17",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-limit_tp_sl_panel","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_15",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_16",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_17",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-limit_tp_tsl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_15",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_16",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_17",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-limit_tp_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_16",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_17",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-limit_tsl_sl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_8",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_14",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_15",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_16",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_17",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-limit_tsl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Limit"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-submit")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_13",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-market_full_panel","#s-trades_active","#s-trades_table" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_12",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_13",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table","#s-market_sl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_11",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_12",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_13",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table","#s-market_empty_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14","#s-Text_cell_17","#s-Text_cell_11" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_12",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_13",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-market_tp_sl_panel","#s-trades_active","#s-trades_table" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_11",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_13",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table","#s-market_tp_tsl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_11",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_12",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_13",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table","#s-market_tp_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_13",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table","#s-market_tsl_sl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_11",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_13",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-trades_active","#s-trades_table","#s-market_tsl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_11" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_14" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_17" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_5",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-stop_full_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stop_sl_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-stop_empty_panel","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_5",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stop_tp_sl_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_5",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stop_tp_sl_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_5",
                    "property": "jimGetValue"
                  },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-stop_tp_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": "3489.62"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimRegExp",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stop_tsl_sl_panel","#s-orders_table","#s-orders_active" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": "3305.63"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimAnd",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      },{
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimRegExp",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                      } ]
                    } ]
                  },{
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimRegExp",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    },"^[-+]?[0-9]*[\\.|\\,]?[0-9]+$" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-orders_table","#s-orders_active","#s-stop_tsl_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_26" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_28" ],
                    "value": "3349.16"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_30" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_cell_34" ],
                    "value": "Stop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-sell" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-submit_1","#s-Rectangle_15","#s-submit" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-buy" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-submit_1","#s-Rectangle_15","#s-submit" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/601b45f0-3f2a-4d19-b2bb-915ff188d573"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-market_select_options" ],
                      "effect": {
                        "type": "slide",
                        "duration": 500,
                        "direction": "up"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-d12245cc-1680-458d-89dd-4f0d7fb22724")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-empty_table","#s-market","#s-buy","#s-market_order" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });