var version = '1.12.1';
var uid = 'af48b16b9c0f41ecacc8ce663e1b26c0';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
var myMaterials;
var api2;
var seat = {};
var first = true;


var config = {
    pattern: {
        noPattern: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Stitches/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
              normal: {
                normal: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Holes/Normal.jpg",
                    id: ""
                },
                roughness: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Holes/Roughness.jpg",
                    id: ""
                },
                // height: {
                //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Holes/Height.jpg",
                //     id: ""
                // },
                metalness: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Holes/Metalness.jpg",
                    id: ""
                },
                opacity: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/NoPattern/Holes/Opacity.jpg",
                    id: ""
                }
              } 
            }
        },
        pattern1: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Stitches/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern1/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
        },
        pattern2: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Stitches/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern2/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
            
        },
        pattern3: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Stitches/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern3/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
            
        },
        pattern4: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Stitches/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern4/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
            
        },
        pattern5: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Stitches/Roughness.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern5/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
            
        },
        pattern6: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Stitches/Roughness.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern6/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
            
        },
        pattern7: {
            stitches: {
                normal: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Stitches/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Stitches/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Stitches/Roughness.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Stitches/Metalness.jpg",
                        id: ""
                    },
                    opacity: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Stitches/Opacity.jpg",
                        id: ""
                    }
                }
            },
            leather: {
                fe: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/FE/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/FE/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/FE/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/FE/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                ch: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/CH/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/CH/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/CH/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/CH/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                al: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/AL/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/AL/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/AL/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/AL/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                },
                na: {
                    normals: {
                        normal1: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal1/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal1/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal1/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal1/Metalness.jpg",
                                id: ""
                            },
                        },
                        normal2: {
                            normal: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal2/Normal.jpg",
                                id: ""
                            },
                            roughness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal2/Roughness.jpg",
                                id: ""
                            },
                            // height: {
                            //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal2/Height.jpg",
                            //     id: ""
                            // },
                            metalness: {
                                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Leather/NA/Normals/Normal2/Metalness.jpg",
                                id: ""
                            },
                        }
                    },
                }
            },
            holes: {
                normal: {
                  normal: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Holes/Normal.jpg",
                      id: ""
                  },
                  roughness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Holes/Roughness.jpg",
                      id: ""
                  },
                //   height: {
                //       url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Holes/Height.jpg",
                //       id: ""
                //   },
                  metalness: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Holes/Metalness.jpg",
                      id: ""
                  },
                  opacity: {
                      url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/Pattern/Pattern7/Holes/Opacity.jpg",
                      id: ""
                  }
                } 
            }
            
        },
    },
    noPattern: {
        fe: {
            normals: {
                normal1: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal1/Metalness.jpg",
                        id: ""
                    },
                },
                normal2: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal2/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal2/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal2/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal2/Metalness.jpg",
                        id: ""
                    },
                },
                normal3: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal3/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal3/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal3/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/FE/Normals/Normal3/Metalness.jpg",
                        id: ""
                    },
                }
            },
        },
        ch: {
            normals: {
                normal1: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal1/Metalness.jpg",
                        id: ""
                    },
                },
                // normal2: {
                //     normal: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal2/Normal.jpg",
                //         id: ""
                //     },
                //     roughness: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal2/Roughness.jpg",
                //         id: ""
                //     },
                //     height: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal2/Height.jpg",
                //         id: ""
                //     },
                //     metalness: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal2/Metalness.jpg",
                //         id: ""
                //     },
                // },
                // normal3: {
                //     normal: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal3/Normal.jpg",
                //         id: ""
                //     },
                //     roughness: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal3/Roughness.jpg",
                //         id: ""
                //     },
                //     height: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal3/Height.jpg",
                //         id: ""
                //     },
                //     metalness: {
                //         url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/CH/Normals/Normal3/Metalness.jpg",
                //         id: ""
                //     },
                // }
            },
        },
        al: {
            normals: {
                normal1: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/Al/Normals/Normal1/Metalness.jpg",
                        id: ""
                    },
                }
            },
        },
        na: {
            normals: {
                normal1: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal1/Metalness.jpg",
                        id: ""
                    },
                },
                normal2: {
                    normal: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Normal.jpg",
                        id: ""
                    },
                    roughness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Roughness.jpg",
                        id: ""
                    },
                    // height: {
                    //     url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Height.jpg",
                    //     id: ""
                    // },
                    metalness: {
                        url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/NoPattern/NA/Normals/Normal2/Metalness.jpg",
                        id: ""
                    },
                },
            },
        },
    },
    baseColors: {
        leather: {
            fe: {
                fe1: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_1.jpg",
                    id: ""
                },
                fe2: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_2.jpg",
                    id: ""
                },
                fe3: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_3.jpg",
                    id: ""
                },
                fe4: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_4.jpg",
                    id: ""
                },
                fe5: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_5.jpg",
                    id: ""
                },
                fe6: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_6.jpg",
                    id: ""
                },
                fe7: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_7.jpg",
                    id: ""
                },
                fe8: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_8.jpg",
                    id: ""
                },
                fe9: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_9.jpg",
                    id: ""
                },
                fe10: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_10.jpg",
                    id: ""
                },
                fe11: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_11.jpg",
                    id: ""
                },
                fe12: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_12.jpg",
                    id: ""
                },
                fe13: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_13.jpg",
                    id: ""
                },
                fe14: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_14.jpg",
                    id: ""
                },
                fe15: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_15.jpg",
                    id: ""
                },
                fe16: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_16.jpg",
                    id: ""
                },
                fe17: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_17.jpg",
                    id: ""
                },
                fe18: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_18.jpg",
                    id: ""
                },
                fe19: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_19.jpg",
                    id: ""
                },
                fe20: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/FE/FE_20.jpg",
                    id: ""
                },
            },
            ch: {
                ch1: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_01.jpg",
                    id: ""
                },
                ch2: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_02.jpg",
                    id: ""
                },
                ch3: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_03.jpg",
                    id: ""
                },
                ch4: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_04.jpg",
                    id: ""
                },
                ch5: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_05.jpg",
                    id: ""
                },
                ch6: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_06.jpg",
                    id: ""
                },
                ch7: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_07.jpg",
                    id: ""
                },
                ch8: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_08.jpg",
                    id: ""
                },
                ch9: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_09.jpg",
                    id: ""
                },
                ch10: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_10.jpg",
                    id: ""
                },
                ch11: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_11.jpg",
                    id: ""
                },
                ch12: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_12.jpg",
                    id: ""
                },
                ch13: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_13.jpg",
                    id: ""
                },
                ch14: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_14.jpg",
                    id: ""
                },
                ch15: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_15.jpg",
                    id: ""
                },
                ch16: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_16.jpg",
                    id: ""
                },
                ch17: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_17.jpg",
                    id: ""
                },
                ch18: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_18.jpg",
                    id: ""
                },
                ch19: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_19.jpg",
                    id: ""
                },
                ch20: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/CH/CH_20.jpg",
                    id: ""
                },
            },
            al: {
                al1: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/1045.jpg",
                    id: ""
                },
                al2: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/1110.jpg",
                    id: ""
                },
                al3: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2911.jpg",
                    id: ""
                },
                al4: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2930.jpg",
                    id: ""
                },
                al5: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2932.jpg",
                    id: ""
                },
                al6: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2934.jpg",
                    id: ""
                },
                al7: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2940.jpg",
                    id: ""
                },
                al8: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2957.jpg",
                    id: ""
                },
                al9: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/2974.jpg",
                    id: ""
                },
                al10: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/3322.jpg",
                    id: ""
                },
                al11: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/4097.jpg",
                    id: ""
                },
                al12: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/4996.jpg",
                    id: ""
                },
                al13: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/6833.jpg",
                   
                    id: ""
                },
                al14: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/7586.jpg",
                    id: ""
                },
              
                al15: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/AL/9002.jpg",
                    id: ""
                },
            },
            pg: {
                pg1: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_1.jpg",
                    id: ""
                },
                pg2: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_2.jpg",
                    id: ""
                },
                pg3: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_3.jpg",
                    id: ""
                },
                pg4: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_4.jpg",
                    id: ""
                },
                pg5: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_5.jpg",
                    id: ""
                },
                pg6: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_6.jpg",
                    id: ""
                },
                pg7: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_7.jpg",
                    id: ""
                },
                pg8: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_8.jpg",
                    id: ""
                },
                pg9: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_9.jpg",
                    id: ""
                },
                pg10: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/NA/PG_10.jpg",
                    id: ""
                },
            },
            pn: {
                pn1: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_1.jpg",
                    id: ""
                },
                pn2: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_2.jpg",
                    id: ""
                },
                pn3: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_3.jpg",
                    id: ""
                },
                pn4: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_4.jpg",
                    id: ""
                },
                pn5: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_5.jpg",
                    id: ""
                },
                pn6: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_6.jpg",
                    id: ""
                },
                pn7: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_7.jpg",
                    id: ""
                },
                pn8: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_8.jpg",
                    id: ""
                },
                pn9: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_9.jpg",
                    id: ""
                },
                pn10: {
                    url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Leather/PN/PN_10.jpg",
                    id: ""
                },
            },
        },
        stitches: {
           st1: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/4B1F6A.jpg",
                id: ""
            },
            st2: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/08C745.jpg",
                id: ""
            },
            st3: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/9C4B20.jpg",
                id: ""
            },
            st4: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/9D0102.jpg",
                id: ""
            },
            st5: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/9DA773.jpg",
                id: ""
            },
            st6: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/040E81.jpg",
                id: ""
            },
            st7: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/133C2E.jpg",
                id: ""
            },
            st8: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/453B1F.jpg",
                id: ""
            },
            st9: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/697C61.jpg",
                id: ""
            },
            st10: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/030403.jpg",
                id: ""
            },
            st11: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/052031.jpg",
                id: ""
            },
            st12: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/340709.jpg",
                id: ""
            },
            st13: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/552802.jpg",
                id: ""
            },
            st14: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/840301.jpg",
                id: ""
            },
            st15: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/999355.jpg",
                id: ""
            },
            st16: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/A17B1D.jpg",
                id: ""
            },
            st17: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/A86F19.jpg",
                id: ""
            },
            st18: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/AFB8A6.jpg",
                id: ""
            },
            st19: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/B2EB03.jpg",
                id: ""
            },
            st20: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/B34102.jpg",
                id: ""
            },
            st21: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/D5362C.jpg",
                id: ""
            },
            st22: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/E1E6CF.jpg",
                id: ""
            },
            st23: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/EFAC01.jpg",
                id: ""
            },
            st24: {
                url: "https://s3.amazonaws.com/cetus.metalok.io/configurator2/BaseColors/Stitches/FD4702.jpg",
                id: ""
            }
        }
    }
};

function changeBaseColor(material, baseColor) {
    console.error('Material or baseColor is undefined.');
  if(material.channels.AlbedoPBR.texture != undefined)
    material.channels.AlbedoPBR.texture.uid = baseColor.id;
  api2.setMaterial(material);
}

function changePatternStitchesColor(baseColor) {
    // console.log(baseColor)
  changeBaseColor(seat['STITCHPATTERN1MAT'], baseColor);
  changeBaseColor(seat['STITCHPATTERN2MAT'], baseColor);
  changeBaseColor(seat['STITCHPATTERN3MAT'], baseColor);
}



function changePattern(normal, patternMaterial, stitchesMaterial, holesMaterial, pattern, leather, x, y, u, v) {
    console.log("basic-pattern-script", normal, leather, pattern, pattern.leather["ch"].normals.normal1.normal.url)
    if(normal == 1)
        changeMaterial(patternMaterial, pattern.leather[leather].normals.normal1, x, y);
     
    else if(normal == 2)
        changeMaterial(patternMaterial, pattern.leather[leather].normals.normal2, x, y);    
    if(patternMaterial.channels.BumpMap.texture != undefined)
        patternMaterial.channels.BumpMap.UVTransforms.offset = [u, v];
    if(patternMaterial.channels.NormalMap.texture != undefined)
        patternMaterial.channels.NormalMap.UVTransforms.offset = [u, v];
    if(patternMaterial.channels.Opacity.texture != undefined)
        patternMaterial.channels.Opacity.UVTransforms.offset = [u, v];
    if(patternMaterial.channels.MetalnessPBR.texture != undefined)
        patternMaterial.channels.MetalnessPBR.UVTransforms.offset = [u, v];
    if(patternMaterial.channels.RoughnessPBR.texture != undefined)
        patternMaterial.channels.RoughnessPBR.UVTransforms.offset = [u, v];

    changeMaterial(stitchesMaterial, pattern.stitches.normal, x, y);
    if(stitchesMaterial.channels.BumpMap.texture != undefined)
        stitchesMaterial.channels.BumpMap.UVTransforms.offset = [u, v];
    if(stitchesMaterial.channels.NormalMap.texture != undefined)
        stitchesMaterial.channels.NormalMap.UVTransforms.offset = [u, v];
    if(stitchesMaterial.channels.Opacity.texture != undefined)
        stitchesMaterial.channels.Opacity.UVTransforms.offset = [u, v];
    if(stitchesMaterial.channels.MetalnessPBR.texture != undefined)
        stitchesMaterial.channels.MetalnessPBR.UVTransforms.offset = [u, v];
    if(stitchesMaterial.channels.RoughnessPBR.texture != undefined)
        stitchesMaterial.channels.RoughnessPBR.UVTransforms.offset = [u, v];

    changeMaterial(holesMaterial, pattern.holes.normal, x, y);
    if(holesMaterial.channels.BumpMap.texture != undefined)
        holesMaterial.channels.BumpMap.UVTransforms.offset = [u, v];
    if(holesMaterial.channels.NormalMap.texture != undefined)
        holesMaterial.channels.NormalMap.UVTransforms.offset = [u, v];
    if(holesMaterial.channels.Opacity.texture != undefined)
        holesMaterial.channels.Opacity.UVTransforms.offset = [u, v];
    if(holesMaterial.channels.MetalnessPBR.texture != undefined)
        holesMaterial.channels.MetalnessPBR.UVTransforms.offset = [u, v];
    if(holesMaterial.channels.RoughnessPBR.texture != undefined)
        holesMaterial.channels.RoughnessPBR.UVTransforms.offset = [u, v];

    api2.setMaterial(patternMaterial);
    api2.setMaterial(stitchesMaterial);
    api2.setMaterial(holesMaterial);
    console.log("this-him-script")
}

function changeMaterial(material, normal, u, v) {

    if(material.channels.NormalMap.texture != undefined) {
        console.log("this is calling-script-change-material")
        material.channels.NormalMap.UVTransforms.scale = [u, v];
        material.channels.NormalMap.texture.uid = normal.normal.id;
    }
   
    if(material.channels.Opacity.texture != undefined) {
        material.channels.Opacity.UVTransforms.scale = [u, v];
        material.channels.Opacity.texture.uid = normal.opacity.id;
    }
    if(material.channels.MetalnessPBR.texture != undefined) {
        material.channels.MetalnessPBR.UVTransforms.scale = [u, v];
        material.channels.MetalnessPBR.texture.uid = normal.metalness.id;
    }
        
    if(material.channels.RoughnessPBR.texture != undefined) {
        material.channels.RoughnessPBR.UVTransforms.scale = [u, v];
        material.channels.RoughnessPBR.texture.uid = normal.roughness.id;
    }
    
    api2.setMaterial(material);
    
}

var error = function error() {
  console.error('Sketchfab API error');
};

function updateIds(obj) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            updateIds(obj[key]);
        } else if (key === 'url' && obj.url !== '' && obj.id === "") {
            api2.addTexture(obj.url, function (err, textureId) {
                obj.id = textureId;
                console.log(textureId);
            });
        }
    }
}

var success = function success(api) {

    api2 = api;
    api.addEventListener('modelLoadProgress', function (factor) {
        if(first) {
            updateIds(config);
            first = false;
        }
    });

    api.addEventListener('viewerready', function () {

        api.getMaterialList(function (err, materials) {
            myMaterials = materials;
            for (var i = 0; i < myMaterials.length; i++) {
                var m = myMaterials[i];
                console.log(m.name, m);
                seat[m.name] = m;
            }
        });

    });
    api.load();
    api.start();
};

client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1
});