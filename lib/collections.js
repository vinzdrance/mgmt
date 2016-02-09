

Playlists = new orion.collection('playlists', {
  singularName: 'playlist',
  pluralName: 'playlists',
  link: {
    title: 'Ambiances'
  },
  tabular: {
    columns: [
      {data: 'intensity', title: 'Intensité', width: '15%'},
      {data: 'prettyname', title: 'Titre'},
      {data: 'path', title:'Container',width: '25%'}
    ]
  }
});

Clients = new orion.collection('clients', {
  singularName: 'client',
  pluralName: 'clients',
  link: {
    title: 'Clients/Boxes'
  },
  tabular: {
    columns: [
      {data: '_id', title: 'ID', width: '15%'},
      {data: 'name', title: 'Nom'},
    ]
  }
});

Biztypes = new orion.collection('biztypes', {
  singularName: 'biztype',
  pluralName: 'biztypes',
  link: {
    title: 'Types de biz'
  },
  tabular: {
    columns: [
      {data: '_id', title: 'Type de business'},
    ]
  }
});

Reports = new orion.collection('reports', {
  singularName: 'report',
  pluralName: 'reports',
  link: {
    title: 'Stats de Lecture'
  },
  tabular: {
    columns: [
      {data: 'clientid', title: 'ID Client', width: '15%'},
      {data: 'playlist', title: 'Playlist'},
      {data: 'createdAt', title: 'Date et Heure', width: '20%'}
    ]
  }
});

Boxgroups = new orion.collection('boxgroups', {
  singularName: 'boxgroup',
  pluralName: 'boxgroups',
  link: {
    title: 'Multizones'
  },
  tabular: {
    columns: [
      {data: 'name', title: 'Nom du Groupe'},
      {data: 'members', title: 'Boxes membres du Groupe'}
    ]
  }
});

Biztypes.attachSchema(new SimpleSchema({
  // _id: {
  //   type: String,
  //   label: "Code icône",
  //   autoform: {
  //     afFormGroup: {
  //     'formgroup-class': 'col-md-6',
  //     }
  //   }
  // },
  _id: {
    type: String,
    label: "Nom du biz recommandé",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  }
}));

Playlists.attachSchema(new SimpleSchema({
  thematique: {
    type: Boolean,
    label: "Est une ambiance thématique",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-12',
      }
    }
  },
  prettyname: {
    type: String,
    label: "Titre",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  },
  path: {
    type: String,
    label: "Container",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  },
  // clients: orion.attribute('hasMany', {
  //   label: 'Clients autorisés',
  //   optional: true
  // }, {
  //   collection: Clients,
  //   titleField: 'name',
  //   publicationName: 'playlistClients',
  // }),
  order: {
    type: Number,
    label: "Ordre",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  },
  intensity: {
    type: String,
    optional: false,
    label: "Intensité",
    allowedValues: ['0', '1', '2', '3', '4', '5'],
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  },
  description: {
    type: String,
    optional: true,
    label: "Description",
    autoform: {
      afFieldInput: {
        type: "textarea"
      },
      afFormGroup: {
      'formgroup-class': 'col-md-12',
      }

    }
  },
  biztypes: orion.attribute('hasMany',
  {
    label: 'Recommandé pour',
    optional: true,
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-12',
      }
    }
  },
  {
    collection: Biztypes,
    titleField: '_id',
    publicationName: 'playlistbiztypes',
  }),

  styles: {
    type: String,
    optional: true,
    label: "Styles",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-12',
      }
    }
  },

}));






Clients.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Nom du Client",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  },
  _id: {
    type: String,
    label: "ID Client",
    autoform: {
      afFormGroup: {
      'formgroup-class': 'col-md-6',
      }
    }
  },
  // accesthemathiques: {
  //   type: Boolean,
  //   label: "Le client a accès aux thématiques",
  //   autoform: {
  //     afFormGroup: {
  //     'formgroup-class': 'col-md-12',
  //     }
  //   }
  // },
//  playlists: orion.attribute('hasMany', {
  //   playlists: {
  //   label: 'Ambiances Personnalisées',
  //   optional: true,
  //   type: String,
  //   autoform: {
  //     afFormGroup: {
  //     'formgroup-class': 'col-md-12',
  //     }
  //   },
  //   autojoin: {
  //     collection: Playlists, //references the Children global variable
  //     id: 'id2' //(optional) the id of the target(i.e. Children) collection
  //   }
  //
  // },

    //  testobjet: {
    //    type: Array,
    //    optional: true,
    //    label: 'Playlists Personnalisées'
    //  },
    //  'testobjet.$': {
    //    type: Object,
    //    label: 'Playlists Personnalisées'
    //  },
    'customplaylists.$.prettyname': {
      type: String,
      label: 'Titre',
      autoform: {
        afFormGroup: {
        'formgroup-class': 'col-md-12',
        }
      }
    },
    'customplaylists.$.path': {
      type: String,
      label: 'Nom du Container',
      autoform: {
        afFormGroup: {
        'formgroup-class': 'col-md-6',
        }
      }
    },
    'customplaylists.$.order': {
      type: Number,
      label: 'Ordre',
      autoform: {
        afFormGroup: {
        'formgroup-class': 'col-md-6',
        }
      }
    },






  //, {
  //   collection: Playlists,
  //   titleField: 'prettyname',
  //   publicationName: 'clientPlaylists',
  //
  // })

}));
